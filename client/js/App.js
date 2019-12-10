import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Login from './screens/Login';
import RootStackNavigator from './navigation/RootStackNavigator';
import Confirmation from './screens/Confirmation';

export default class App extends Component {
  render() {
    return (
      <>
        <Confirmation title="campagin name" />
        <RootStackNavigator />
      </>
    );
  }
}
