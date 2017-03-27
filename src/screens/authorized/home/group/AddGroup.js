import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AddContact extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>AddContact</Text>
            </View>
        );
    }
}

export default AddContact;
