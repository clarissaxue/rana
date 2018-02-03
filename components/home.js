import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

class HomeScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true
    };

    componentWillMount() {
        //Set redux user to home
        if (this.props.user) {
            this.setState({
                user: this.props.user
            });
        }
    }

    render() {
        return (
            <View>
                <Text h1>Welcome to Rana {this.state.user.data.firstName} {this.state.user.data.lastName}</Text>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, null)(HomeScreen);