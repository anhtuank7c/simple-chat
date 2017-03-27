import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SettingScreen from '../screens/authorized/Setting';

const Setting = StackNavigator({
    Setting: { screen: SettingScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'Setting',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../img/icons/gear.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        }
    });
const styles = {
    icon: {
        width: 32,
        height: 32
    }
};

export default Setting;
