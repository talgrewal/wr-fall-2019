import React, {Component} from 'react';
import RootStackNavigator from './navigation/RootStackNavigator';
import client from './config/api';
import {ApolloProvider} from 'react-apollo';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
