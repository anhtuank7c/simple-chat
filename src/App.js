import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('facebook_login', () => App);
