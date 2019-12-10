import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Login from './screens/Login';
import RootStackNavigator from './navigation/RootStackNavigator';
import {ApolloProvider} from '@apollo/react-common';
import client from './config/api';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
