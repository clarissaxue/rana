import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { requestLogout } from '../redux/actions/loginAction';

class ProfileScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true
    }

    componentWillMount() {
        //Set redux user to home
        if (this.props.user[0]) {
            this.setState({
                user: this.props.user[0]
            })
        }
    }

    logout = () => {
        this.props.requestLogout();
    };

    render() {
        return (
            <View>
                <Text h1>Hello {this.state.user.username}</Text>
                <Button onPress={this.logout} backgroundColor="black" color="white" title="Log Out" borderRadius={30} large raised />
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        requestLogout: bindActionCreators(requestLogout, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);