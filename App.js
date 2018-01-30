import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { bindActionCreators, combineReducers } from "redux";
import { connect, Provider } from 'react-redux';
import HomeScreen from './components/home';
import LoginScreen from './components/login';
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

    this.currentUser = this.props.user;
    this.startApp(this.currentUser);
  }

  /**
   * function that gets the current state of the user in the redux store.
   */
  onUserUpdate() {
    let { user } = store.getState();
    console.log("User: ", user);
    // console.log("Current root: ", this.currentRoot);

    // handle a root change
    if (user.length <= 1 && this.currentUser != user) {
      this.currentUser = user;
      this.startApp(user);
    }
  }

  /**
   * Starts the application as a tab based app or a single screen app
   * @param {*user prop from redux store} user
   */
  startApp = (user) => {
    if (user.length > 0) {
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
    else {
      //Renders Single Page App for Login
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'LoginScreen'
        },
        animationType: 'fade'
      });
    }
  }
  //Render returns null because the Navigation renders the app
  render() {
    return null
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, null)(App);