import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { bindActionCreators } from "redux";
import { requestLogin } from '../redux/actions/loginAction';
import { connect } from 'react-redux';
import { loginSaga } from '../redux/sagas';
import { sagaMiddleware } from '../redux/store';


sagaMiddleware.run(loginSaga);

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    static navigatorStyle = {
        navBarHidden: true
    }

    login = () => {
        this.props.requestLogin("bryevo");
    }

    render() {
        return (
            <View>
                <Text h1>Please log in!</Text>
                <Text />
                <Button backgroundColor="teal" color="white" title="Create Account" borderRadius={30} large raised />
                <Text />
                <Button onPress={this.login} backgroundColor="black" color="white" title="Login" borderRadius={30} large raised />
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestLogin: bindActionCreators(requestLogin, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(LoginScreen);