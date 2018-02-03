import React, { Component } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements';
import * as EmailValidator from 'email-validator';
import { bindActionCreators } from "redux";
import { createAccountAction } from '../redux/actions/loginAction';
import { connect } from 'react-redux';
// import { WhiteText } from './styles/styledComponents';

class CreateAccountNameScreen extends Component {
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

    componentDidMount() {
        this.setState({
            phoneNumber: this.props.phoneNumber
        });
    }


    handleFirstName = (value) => {
        this.setState({
            firstName: value
        });
    }

    handleLastName = (value) => {
        this.setState({
            lastName: value
        });
    }

    /**
    * Navigates to the email create account screen
    * and sends the necessary data to sign up
    */
    nextScreen = () => {
        this.props.navigator.push({
            screen: 'CreateAccountEmailScreen',
            passProps: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber
            }
        });
    }

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'handled'}>
                <Text h1>What's your name?</Text>
                <FormLabel>First name</FormLabel>
                <FormInput onChangeText={this.handleFirstName} />
                <FormLabel>Last name</FormLabel>
                <FormInput onChangeText={this.handleLastName} value={this.state.number} />
                <Text />
                <Button disabled={!this.state.firstName || !this.state.lastName || this.state.firstName === "" || this.state.lastName === ""} 
                    onPress={this.nextScreen} backgroundColor="black" color="white" title="Log in" borderRadius={30} large raised />

            </ScrollView>
        );
    }
}

class CreateEmailScreen extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: '#FFFFFF',
        screenBackgroundColor: '#FFFFFF',
        statusBarTextColorSchemeSingleScreen: 'dark'
    };

    constructor(props) {
        super(props);

        this.state = {
            validation: false
        };
    }

    componentDidMount() {
        const { firstName, lastName, phoneNumber } = this.props;
        this.setState({
            firstName,
            lastName,
            phoneNumber
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            emailTaken: nextProps.login.emailTaken
        });
    }

    handleEmail = (value) => {
        this.setState({
            email: value,
            emailTaken: false
        });
    }

    /**
    * Button event listener to create an account with necessary data
    */
    handleCreateAccount = () => {
        console.log(this.state);
        if (EmailValidator.validate(this.state.email)) {    //If the email is valid
            this.props.createAccountAction(this.state);
        } else {    //email is invalid but also it is not taken
            this.setState({
                emailTaken: false
            });
        }
        this.setState({     // trigger flag to show error
            validation: true
        });
    }

    /**
    * Returns the correct error message
    * @returns {string} email error message
    */
    validateEmail = () => {
        let emailValidation = "";
        if (this.state.emailTaken) {
            emailValidation = "This email is associated another phone number";
        }
        else if (this.state.email.length === 0) {
            emailValidation = "An email is required to create an account.";
        }
        else if (!EmailValidator.validate(this.state.email)) {
            emailValidation = "This is not a valid email. Please try again";
        }
        return emailValidation;
    }

    render() {
        let emailValidation = this.state.validation ? this.validateEmail() : "";
        let formValidation = emailValidation.length > 0 ? false : true;     //Determines whether error message should show or not
        return (
            <ScrollView keyboardShouldPersistTaps={'handled'}>
                <Text h1>And, your email?</Text>
                <FormLabel>Email Address</FormLabel>
                <FormInput onChangeText={this.handleEmail} blurOnSubmit />
                <FormValidationMessage disabled={formValidation}>{emailValidation}</FormValidationMessage>
                <Text />
                <Button onPress={this.handleCreateAccount} backgroundColor="black" color="white" title="Log in" borderRadius={30} large raised />

            </ScrollView>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createAccountAction: bindActionCreators(createAccountAction, dispatch)
    };
}

const CreateAccountEmailScreen = connect(mapStateToProps, mapDispatchToProps)(CreateEmailScreen);

export { CreateAccountEmailScreen, CreateAccountNameScreen };