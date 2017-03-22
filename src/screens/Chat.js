import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions/Authenticate';

class Chat extends Component {

    static navigationOptions = {
        title: 'Chat',
        header: ({ state }) => ({
            left: (
                <TouchableWithoutFeedback
                    onPress={() => state.params.onLogoutPressed()}
                >
                    <View
                        style={{
                            padding: 10,
                        }}
                    >
                        <Text>Logout</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }

    constructor(props) {
        super(props);
        this.onLogoutPressed = this.onLogoutPressed.bind(this);
    }

    state = {
        friends: [
            {
                name: 'Anh Tuan Nguyen 1',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 2',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 3',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 4',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 5',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 6',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 6',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 6',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 6',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 6',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 6',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 6',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 6',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
            {
                name: 'Anh Tuan Nguyen 6',
                age: 27,
                avatar: 'https://pbs.twimg.com/profile_images/696303792946479105/xLdaVgJh.jpg'
            },
        ]
    }

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.state.friends);
    }

    componentDidMount() {
        this.props.navigation.setParams({
            onLogoutPressed: this.onLogoutPressed
        });
    }

    onLogoutPressed = () => {
        this.props.logout();
    }

    renderRow = (item) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.avatar }} style={styles.itemAvatar} />
                <Text style={styles.itemName}>
                    {item.name}
                </Text>
            </View>
        );
    }

    renderSeparator = (sectionID, rowID) => {
        return <View key={`${sectionID}-${rowID}`} style={styles.separator} />;
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
    },
    itemAvatar: {
        width: 60,
        height: 60
    },
    itemName: {
        paddingLeft: 15,
        fontSize: 16,
        color: '#333'
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#444'
    }
}

export default connect(null, { logout })(Chat);
