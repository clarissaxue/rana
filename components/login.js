import React, { Component } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements';
import { bindActionCreators } from "redux";
import { requestLogin } from '../redux/actions/loginAction';
import { connect } from 'react-redux';
import { loginSaga } from '../redux/sagas';
import { sagaMiddleware } from '../redux/store';
// import { WhiteText } from './styles/styledComponents';

sagaMiddleware.run(loginSaga);

class LoginScreen extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: '#FFFFFF',
        screenBackgroundColor: '#FFFFFF',
        statusBarTextColorSchemeSingleScreen: 'dark'
    };

    constructor(props) {
        super(props);

        this.state = {
            // Must Register phone number in Twilio console
            // number: this.randomizePhoneNumber()
        };
    }

    requestVerification = () => {
        this.props.requestLogin(this.state.number);
        this.props.navigator.push({
            screen: 'VerifyLoginScreen'
        });
    }

    randomizePhoneNumber = () => {
        var number = Math.floor(Math.random() * 9000000000 + 1000000000).toString();
        return '(' + number.substr(0, 3) + ')' + number.substr(4, 3) + '-' + number.substr(6, 4);
    }

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'handled'}>
                <FormLabel>What's your number?</FormLabel>
                <FormInput onChangeText={this.handleText} value={this.state.number} />
                <FormValidationMessage>This field is required</FormValidationMessage>
                <Text />
                <Button onPress={this.requestVerification} backgroundColor="black" color="white" title="Log in" borderRadius={30} large raised />

            </ScrollView>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        requestLogin: bindActionCreators(requestLogin, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(LoginScreen);