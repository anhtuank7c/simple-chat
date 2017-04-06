import firebase from 'firebase';

import {
    FETCH_CONTACT_SUCCESS,
    FETCH_CONTACT_ERROR
} from './types';

export const fetchListContact = ({ me }) => {
    console.log('fetchListContact');
    return (dispatch) => {
        /**
         * on: check network => fetch => compare local => sync
         * once: connect db and fetch once, read persisted data (on phone)
         * value, child_added, changed etc....
         * JSON tree
         * Object
         *      Object
         *      Object etc...
         */
        firebase.database().ref('users')
            .on('value', snap => {
                const contacts = [];
                snap.forEach(contact => {
                    if (contact.key !== me.uid) {
                        const ct = contact.val();
                        contacts.push({
                            uid: contact.key,
                            displayName: ct.displayName,
                            email: ct.email,
                            photoURL: ct.photoURL
                        });
                    }
                });

                dispatch({
                    type: FETCH_CONTACT_SUCCESS,
                    contacts
                });
            }, error => {
                console.log('error', error);
                dispatch({
                    type: FETCH_CONTACT_ERROR,
                });
            });
    };
};
