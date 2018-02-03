import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements';
import { bindActionCreators } from "redux";
import { verifyLogin } from '../redux/actions/loginAction';
import { connect } from 'react-redux';
// import { WhiteText } from './styles/styledComponents';

class VerifyLoginScreen extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: '#FFFFFF',
        screenBackgroundColor: '#FFFFFF',
        statusBarTextColorSchemeSingleScreen: 'dark'
    };
    constructor(props) {
        super(props);

        this.state = {
            verifyId: '',
            validation: false
        };
    }

    handleText = (value) => {
        if (value.length > 4) { //Resets the verfication code if value length exceeds 4 digits
            this.setState({
                verifyId: value.substr(value.length-1),
                validation: false
            });
        } else {
        this.setState({     //sets value of user verification code
            verifyId: value,
            validation: false
        }, requestLogin = () => {   //callback function to check if user's code matches verification code
            if (parseInt(this.state.verifyId) === 1111) {
                this.props.verifyLogin(this.props.phoneNumber, this.props.navigator);
            } else if (this.state.verifyId.length === 4) {  //else turn validation flag on to set error messages
                this.setState({
                    validation: true
                })
            }
        });
        }
    }

    render() {
        const phoneValidation = this.state.validation ? "Incorrect verification code. Try again." : "";
        return (
            <TouchableOpacity>
                <FormLabel>Enter your 4-digit verification number</FormLabel>
                <FormInput onChangeText={this.handleText} value={this.state.verifyId} keyboardType="numeric" />
                <FormValidationMessage disabled={this.state.validation}>{phoneValidation}</FormValidationMessage>
                <Text />
            </TouchableOpacity>
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
        verifyLogin: bindActionCreators(verifyLogin, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyLoginScreen);