import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AddContact extends Component {
    static navigationOptions = {
        tabBar: {
            visible: false
        }
    }

    render() {
        console.log(this.props);
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
