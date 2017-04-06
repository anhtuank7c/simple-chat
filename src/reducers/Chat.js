import {
    FETCH_ROOM_SUCCESS,
    FETCH_ROOM_ERROR,
    REGISTER_ROOM,
    FECTH_MESSSAGE_SUCCESS,
    FECTH_MESSSAGE_ERROR
} from '../actions/types';

const INITIAL = {
    loading: true,
    messages: [],
    roomKey: null
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case FETCH_ROOM_SUCCESS:
            return { ...INITIAL, loading: false, roomKey: action.roomKey };
        case FETCH_ROOM_ERROR:
            return { ...INITIAL, loading: false };
        case REGISTER_ROOM:
            return { ...state, roomKey: action.roomKey };
        case FECTH_MESSSAGE_SUCCESS:
            return { ...state, loading: false, messages: action.messages };
        case FECTH_MESSSAGE_ERROR:
            return { ...INITIAL, loading: false };
        default:
            return state;
    }
}