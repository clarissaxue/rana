import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements'

class HomeScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true
    };

    render() {
        return (
            <View>
                <Text h1>Rana</Text>
            </View>
        );
    }
}


export default HomeScreen;