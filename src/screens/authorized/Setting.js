import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerButton } from '../../components';

class Setting extends Component {
    static navigationOptions = {
        title: 'Setting',
        header: (navigation) => ({
            visible: true,
            left: <DrawerButton navigation={navigation} />
        })
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>Setting</Text>
            </View>
        );
    }
}

export default Setting;
