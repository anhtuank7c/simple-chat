import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListGroup from '../screens/authorized/home/group/ListGroup';
import AddGroup from '../screens/authorized/home/group/AddGroup';
import EditGroup from '../screens/authorized/home/group/EditGroup';
import ViewGroup from '../screens/authorized/home/group/ViewGroup';

const TabGroup = StackNavigator({
    List: {
        screen: ListGroup,
        navigationOptions: {
            tabBar: {
                label: 'Group',
                icon: ({ tintColor }) => <Image source={require('../img/icons/group.png')} style={[styles.icon, { tintColor }]} />,
            }
        }
    },
    Add: { screen: AddGroup },
    Edit: { screen: EditGroup },
    View: { screen: ViewGroup },
});
const styles = {
    icon: {
        width: 32,
        height: 32
    }
};
export default TabGroup;
