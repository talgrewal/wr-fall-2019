import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView height="100%">
        <Signup />
      </SafeAreaView>
    );
  }
}
