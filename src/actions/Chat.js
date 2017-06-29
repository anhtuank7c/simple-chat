import firebase from 'firebase';
import {
    FETCH_ROOM_SUCCESS,
    FETCH_ROOM_ERROR,
    REGISTER_ROOM,
    FECTH_MESSSAGE_SUCCESS,
    FECTH_MESSSAGE_ERROR
} from './types';

export const findRoomByUser = (me, friend) => {
    const db = firebase.database();
    return (dispatch) => {
        let roomKey = null;
        /**
         * find all rooms belong to me
         */
        db.ref(`users/${me.uid}/rooms`).on('value', rooms => {
            /**
             * if i have no room yet
             * stop all stuff
             */
            if (rooms.val() === null) {
                dispatch({
                    type: FETCH_ROOM_ERROR
                });
                return;
            }

            /**
             * loop all rooms
             */
            rooms.forEach(room => {
                /**
                 * if this room belong friend too
                 * => found room
                 */
                db.ref(`users/${friend.uid}/rooms/${room.key}`).on('value', snap => {
                    if (snap.val()) {
                        console.log('FOUND ROOM', room.key);
                        roomKey = room.key;
                    }
                });
                if (roomKey != null) {
                    /**
                     * found room
                     * break the loop
                     */
                    return;
                }
            });
            /**
             * if room belong to us
             * dispatch fetch room ok
             * do fetch message
             */
            if (roomKey != null) {
                dispatch({
                    type: FETCH_ROOM_SUCCESS,
                    roomKey
                });
                /**
                 * fetch message by room
                 */
                fetchMessagesByRoom(dispatch, roomKey, db);

            } else {
                dispatch({
                    type: FETCH_ROOM_ERROR
                })
            }
        }, error => {
            console.log('findRoomByUserError', error);
        });
    };
};


const fetchMessagesByRoom = (dispatch, roomKey, db) => {
    db.ref(`messages/${roomKey}`).on('value', snap => {
        const messages = [];
        snap.forEach(message => {
            const msg = message.val();
            messages.push({
                _id: message.key,
                text: msg.text,
                user: msg.user,
                createdAt: msg.createdAt
            });
        });
        /**
         * sort messages
         */
        messages.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        dispatch({
            type: FECTH_MESSSAGE_SUCCESS,
            messages
        });
    }, error => {
        console.log('fetchMessagesByRoomERROR', error);
    });
};

export const sendMessage = (me, friend, text, roomKey) => {
    const db = firebase.database();
    return (dispatch) => {
        /**
         * if we don't have any room
         * register new one
         */
        if (roomKey === null) {
            roomKey = registerRoom(dispatch, me, friend, db);
        }

        const now = firebase.database.ServerValue.TIMESTAMP;
        /**
         * push message
         */
        db.ref(`messages/${roomKey}`).push({
            text,
            user: {
                _id: me.uid,
                name: me.displayName,
                avatar: me.photoURL
            },
            createdAt: now
        });
    };
};

const registerRoom = (dispatch, me, friend, db) => {
    const roomKey = db.ref(`rooms`).push().key;

    const update = {};
    /**
     * update room
     */
    update[`rooms/${roomKey}/${me.uid}`] = true;
    update[`rooms/${roomKey}/${friend.uid}`] = true;

    /**
     * update user
     */
    update[`users/${me.uid}/rooms/${roomKey}`] = true;
    update[`users/${friend.uid}/rooms/${roomKey}`] = true;

    db.ref().update(update).catch(error => console.log('registerRoomError', error));
    dispatch({
        type: REGISTER_ROOM,
        roomKey
    });
    return roomKey;
};
