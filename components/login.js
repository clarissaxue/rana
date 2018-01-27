import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationActions } from 'react-navigation'

class LoginScreen extends Component {
    static navigationOptions = {
        headerStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            borderBottomWidth: 0
        }
    };

    /**
     * Login function to reset the index to the Home screen
     */
    login = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Home' })
        ]
    });

    render() {
        return (
            <View>
                <Text h1>Rana</Text>
                <Text />
                <Button backgroundColor="teal" color="white" title="Create Account" borderRadius={30} large raised />
                <Text />
                <Button onPress={() => this.props.navigation.dispatch(this.login)} backgroundColor="black" color="white" title="Login" borderRadius={30} large raised />
            </View>
        );
    }
}

export default LoginScreen;