import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Home from './Home';
import Profile from './Profile';
import Setting from './Setting';
import DrawerContent from '../components/DrawerContent';

const Authorized = DrawerNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
    Setting: { screen: Setting },
    // Logout: { screen: '' },
}, {
        contentComponent: (props) => <DrawerContent {...props} />
    });

export default Authorized;
