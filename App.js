import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/home';
import LoginScreen from './components/login';

const App = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
});

export default App;