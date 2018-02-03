import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { WhiteText, BackgroundView } from './styles/styledComponents';

class GetStartedScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true,
        screenBackgroundColor: '#232323',
        statusBarTextColorSchemeSingleScreen: 'light'
    };

    constructor(props) {
        super(props);
    }

    inputLogin = () => {
        this.props.navigator.push({
            screen: "LoginScreen"
        });
    }

    render() {
        return (
            <BackgroundView>
                <WhiteText h1>Please log in!</WhiteText>
                <Text />
                <Button onPress={this.inputLogin} backgroundColor="teal" color="white" title="Get Started" borderRadius={30} large raised />
                <Text />
            </BackgroundView>
        );
    }
}

export default GetStartedScreen;