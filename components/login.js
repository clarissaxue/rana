import React, { Component } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements';
import { bindActionCreators } from "redux";
import { requestLogin } from '../redux/actions/loginAction';
import { connect } from 'react-redux';
import { loginSaga } from '../redux/sagas';
import { sagaMiddleware } from '../redux/store';
// import { WhiteText } from './styles/styledComponents';

//start the login saga to listen to login actions
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

    /**
    * Handles the phone number text input to set the state
    * @param {*current values of the phone number} value 
    */
    handleText = (value) => {
        this.setState({
            number: value
        });
    }

    /**
    * Dispatches the action to send sms verification and navigates to the phone verification code screen
    * @param {*current values of the phone number} value 
    */
    requestVerification = () => {
        this.props.requestLogin(this.state.number);
        this.props.navigator.push({
            screen: 'VerifyLoginScreen',
            passProps: {
                phoneNumber: this.state.number
            }
        });
    }

    randomizePhoneNumber = () => {
        var number = Math.floor(Math.random() * 9000000000 + 1000000000).toString();
        return '(' + number.substr(0, 3) + ') ' + number.substr(4, 3) + '-' + number.substr(6, 4);
    }

    render() {
        const placeholder = this.randomizePhoneNumber();
        const phoneValidation = "";
        return (
            <ScrollView keyboardShouldPersistTaps={'handled'}>
                <FormLabel>What's your number?</FormLabel>
                <FormInput onChangeText={this.handleText} value={this.state.number} placeholder={placeholder} keyboardType="phone-pad" />
                <FormValidationMessage disabled={false}>{phoneValidation}</FormValidationMessage>
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