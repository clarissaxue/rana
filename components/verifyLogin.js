import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from "redux";
import { verifyLogin } from '../redux/actions/loginAction';
import { connect } from 'react-redux';
import { loginSaga } from '../redux/sagas';
import { sagaMiddleware } from '../redux/store';
// import { WhiteText } from './styles/styledComponents';


class renderPhoneForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            verifyId: ''
        };
    }

    handleText = (value) => {
        this.setState({
            verifyId: value
        });
    }
    requestLogin = () => {
        //Dispatch action
        this.props.verifyLogin(parseInt(this.state.verifyId) === this.props.login.verificationId);
    }

    render() {
        const { input: { value, onChange } } = this.props;
        return (
            <TouchableOpacity>
                <FormLabel>Enter your verification number</FormLabel>
                <FormInput onChangeText={this.handleText} value={this.state.verifyId} />
                <FormValidationMessage>This field is required</FormValidationMessage>
                <Text />
                <Button onPress={this.requestLogin} backgroundColor="black" color="white" title="Log in" borderRadius={30} large raised />
            </TouchableOpacity>
        );
    }
}

class VerifyLoginScreen extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: '#FFFFFF',
        screenBackgroundColor: '#FFFFFF',
        statusBarTextColorSchemeSingleScreen: 'dark'
    };

    render() {
        return (
            <View>
                <Field name={'number'} props={this.props} component={renderPhoneForm} />
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'signIn' })(VerifyLoginScreen));