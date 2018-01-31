import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { bindActionCreators, combineReducers } from "redux";
import { connect, Provider } from 'react-redux';
import { registerScreens } from './screens';
import { store } from './redux/store';
import { requestLogin, receiveLogin } from './redux/actions/loginAction';
import { loadUser } from './redux/sagas';
import storage from 'redux-persist/lib/storage';

class App extends Component {
  constructor(props) {
    super(props);

    //Listens to changes in the store and there are changes performs a callback function
    store.subscribe(this.onUserUpdate.bind(this));

    this.startApp(this.props.login.navigate || "login");
  }

  /**
   * function that gets the current state of the login in the redux store and chooses a navigation app.
   */
  onUserUpdate() {
    let { login } = store.getState();
    console.log("Login state: ", login);

    // handle a root change
    this.startApp(login.navigate);
  }

  /**
   * Starts the application as a tab based app or a single screen app
   * @param {*navigate prop from redux store to navigate through app states
} navigate
   */
  startApp = (navigate) => {
    if (navigate === "home") {
      //Renders Tab App
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'One',
            screen: "HomeScreen",
            title: 'Home',
          },
          {
            label: 'Two',
            screen: "ProfileScreen",
            title: 'My Profile'
          }
        ],
        animationType: 'fade'
      });
    }
    else if (navigate === "login") {
      //Renders Single Page App for Login
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'GetStartedScreen'
        },
        animationType: 'fade'
      });
    }
  }
  //Render returns null because the Navigation renders the app
  render() {
    return null;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
    user: state.user,

  };
}

export default connect(mapStateToProps, null)(App);