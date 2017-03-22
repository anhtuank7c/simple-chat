import { combineReducers } from 'redux';

import Auth from './Auth';
import Navigation from './Navigation';

export default combineReducers({
    authentication: Auth,
    nav: Navigation
});
