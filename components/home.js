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
    * Logout function to reset the index to the Login screen
    */
    logout = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Login' })
        ]
    });

    render() {
        return (
            <View>
                <Text h1>Home</Text>
                <Button onPress={() => this.props.navigation.dispatch(this.logout)} backgroundColor="black" color="white" title="Log Out" borderRadius={30} large raised />
            </View>
        );
    }
}

export default LoginScreen;