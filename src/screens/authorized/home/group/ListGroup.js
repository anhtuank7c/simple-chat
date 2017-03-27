import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListContact extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>List Contact</Text>
            </View>
        );
    }
}

export default ListContact;
