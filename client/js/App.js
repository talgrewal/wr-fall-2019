import React, {Component} from 'react';
import Login from './screens/Login';
import RootStackNavigator from './navigation/RootStackNavigator';
import Event from './screens/Event';
import UserProvider from './context/UserProvider';
import client from './config/api';
import {ApolloProvider} from 'react-apollo';

const comments = [
  {
    user: 'Britney Spears',
    comment:
      'Glad to join the campaign. Love it so much. It inspired me to see the world clearer.',
    date: 'October 25, 2019',
  },
  {
    user: 'Kelly Clarkson',
    comment: 'Really like trees',
    date: 'October 26, 2019',
  },
];
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
