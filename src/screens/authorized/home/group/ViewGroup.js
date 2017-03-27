import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ViewContact extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>ViewContact Contact</Text>
            </View>
        );
    }
}

export default ViewContact;
