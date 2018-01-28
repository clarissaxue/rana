import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

class LoginScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true
    }
    logout = () => {
        this.props.navigator.dismissModal();
    };

    render() {
        return (
            <View>
                <Text h1>Home</Text>
                <Button onPress={this.logout} backgroundColor="black" color="white" title="Log Out" borderRadius={30} large raised />
            </View>
        );
    }
}

export default LoginScreen;