import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Login from './screens/Login';

export default class App extends Component {
  render() {
    return (
      <>
        {/* <StatusBar barStyle="dark-content"> */}
        <Login />
        {/* </StatusBar> */}
      </>
    );
  }
}
