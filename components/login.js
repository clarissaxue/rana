import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

class LoginScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true
      }

    login = () => {
        this.props.navigator.showModal({
            screen: 'HomeScreen',
            title: 'Home is here'
        });
    }

    render() {
        return (
            <View>
                <Text h1>Rana</Text>
                <Text />
                <Button backgroundColor="teal" color="white" title="Create Account" borderRadius={30} large raised />
                <Text />
                <Button onPress={this.login} backgroundColor="black" color="white" title="Login" borderRadius={30} large raised />
            </View>
        );
    }
}

export default LoginScreen;