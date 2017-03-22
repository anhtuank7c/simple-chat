import { LOGIN, LOGOUT } from '../actions/types';

const INITIAL = {
    loggedIn: false,
    user: null
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case LOGIN:
            return { loggedIn: true, user: action.payload };
        case LOGOUT:
            return INITIAL;
        default:
            return state;
    }
};
