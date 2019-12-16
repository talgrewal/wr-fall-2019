import React, {Component} from 'react';
import RootStackNavigator from './navigation/RootStackNavigator';
import UserProvider from './context/UserProvider';
import client from './config/api';
import {ApolloProvider} from 'react-apollo';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <UserProvider>
          <RootStackNavigator />
        </UserProvider>
      </ApolloProvider>
    );
  }
}
