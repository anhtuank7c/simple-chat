import { combineReducers } from 'redux';

import Auth from './Auth';
import Navigation from './Navigation';
import Contact from './Contact';
import Chat from './Chat';

export default combineReducers({
    authentication: Auth,
    nav: Navigation,
    contact: Contact,
    chat: Chat
});
