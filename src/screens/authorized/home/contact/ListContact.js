import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ListView,
    ActivityIndicator,
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { DrawerButton } from '../../../../components';
import { fetchListContact } from '../../../../actions';

class ListContact extends Component {
    static navigationOptions = {
        title: 'List Contact',
        header: (navigation) => ({
            left: <DrawerButton navigation={navigation} />,
            backTitle: null
        }),
    }

    componentWillMount() {
        console.log('ListContact componentWillMount');
        this.props.fetchListContact(this.props);
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ contacts }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(contacts);
    }

    onRowPressed = (friend) => {
        this.props.navigation.navigate('Conversation', { friend });
    }

    renderRow = (item) => {
        return (
            <TouchableOpacity
                onPress={this.onRowPressed.bind(this, item)}
                style={styles.row}
            >
                <Image source={{ uri: item.photoURL }} style={styles.avatar} />
                <Text style={styles.name} >{item.displayName}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.containerIndicator}>
                    <ActivityIndicator size="large" color="grey" animating />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    containerIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    avatar: {
        width: 100,
        height: 100,
        borderWidth: 1
    },
    name: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#000'
    }
};
export default connect(state => ({
    contacts: state.contact.contacts,
    loading: state.contact.loading,
    me: state.authentication.user,
}), { fetchListContact })(ListContact);
