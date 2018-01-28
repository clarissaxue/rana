import React, { Component } from 'react';
import { Platform } from 'react-native';
import HomeScreen from './components/home';
import LoginScreen from './components/login';

class App extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }
  render() {
    let { navigator } = this.props;
    let { loggedIn } = this.state;
    if (loggedIn) {
      return (
        <HomeScreen navigator={navigator} />
      );
    } else {
      return (
        <LoginScreen navigator={navigator} />
      );
    }
  }
}

export default App;