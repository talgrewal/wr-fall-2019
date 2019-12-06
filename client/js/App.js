import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';
// import {ApolloProvider} from '@apollo/react-common';
import {ApolloProvider} from 'react-apollo';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider>
        <SafeAreaView height="100%">
          <Signup />
        </SafeAreaView>
      </ApolloProvider>
    );
  }
}
