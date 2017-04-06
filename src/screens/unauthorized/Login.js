import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { loginSuccess } from '../../actions/Authenticate';

const config = {
    apiKey: "AIzaSyAfpxJrikhNNKy0p2s5a2XdGHh1PrNaKJ0",
    authDomain: "fir-login-6af59.firebaseapp.com",
    databaseURL: "https://fir-login-6af59.firebaseio.com",
    storageBucket: "fir-login-6af59.appspot.com",
    messagingSenderId: "86655694512"
};
firebase.initializeApp(config);

class Login extends Component {

    static navigationOptions = {
        header: {
            visible: false
        }
    }

    state = {
        animating: false,
        error: null
    }

    onLogin = async () => {
        try {
            this.setState({
                animating: true,
                error: null
            });
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                throw new Error('Please sign in before continue');
            }
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const user = await firebase.auth().signInWithCredential(credential);
            this.setState({
                animating: false,
                error: null
            });
            this.props.loginSuccess(user);
        } catch (error) {
            this.setState({
                animating: false,
                error: error.message
            });
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'red' }}>Login Screen</Text>
                <ActivityIndicator
                    animating={this.state.animating}
                    color="#444"
                    size="large"
                />
                {
                    this.state.error ? (
                        <Text style={styles.error}>{this.state.error}</Text>
                    ) : null
                }
                <TouchableOpacity
                    onPress={this.onLogin}
                    style={{
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: '#3b5998',
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ color: '#fff' }}>
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    error: {
        fontSize: 18,
        color: 'red'
    }
};

export default connect(state => ({
    logged: state.authentication.loggedIn,
    user: state.authentication.user
}), { loginSuccess })(Login);