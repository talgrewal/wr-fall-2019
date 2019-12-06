import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';
// import {ApolloProvider} from '@apollo/react-common';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <SafeAreaView height="100%">
          <Signup />
        </SafeAreaView>
      </ApolloProvider>
    );
  }
}
