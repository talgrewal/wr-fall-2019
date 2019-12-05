import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Login from './screens/Login';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView height="100%">
        <Login />
      </SafeAreaView>
    );
  }
}
