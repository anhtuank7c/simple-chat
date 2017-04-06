import {
    FETCH_CONTACT_SUCCESS,
    FETCH_CONTACT_ERROR
} from '../actions/types';

const INITIAL = {
    loading: true,
    contacts: []
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case FETCH_CONTACT_SUCCESS:
            return { ...state, loading: false, contacts: action.contacts };
        case FETCH_CONTACT_ERROR:
            return { ...INITIAL, loading: false };
        default:
            return state;
    }
}