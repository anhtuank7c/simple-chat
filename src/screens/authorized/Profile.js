import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerButton } from '../../components';

class Profile extends Component {
    static navigationOptions = {
        title: 'Profile',
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
                <Text>Profile</Text>
            </View>
        );
    }
}

export default Profile;
