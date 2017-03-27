import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerButton } from '../../../../components';

class ListContact extends Component {
    static navigationOptions = {
        title: 'List Contact',
        header: (navigation) => ({
            left: <DrawerButton navigation={navigation} />
        }),
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>List Contact</Text>
                <Button onPress={() => this.props.navigation.navigate('Add')} title="Goto Add" />
            </View>
        );
    }
}

export default ListContact;
