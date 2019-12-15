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

const event = {
  id: 'ck3qh3hvfyrdz0b09mwjxxs59',
  title: 'Meet Up!',
  description:
    'We are going to find trees and touch them. This is important to get in touch with and the feeling tree today. Have you ever had the dream where you could if when any of could do anything?',
  location: '1490 W Broadway #200, Vancouver, BC',
  startDate: '2019-12-25T19:25:55.846',
  endDate: '2019-12-25T19:26:55.846',
  comments: comments,
};

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <UserProvider>
          <Event event={event} />
          {/* <RootStackNavigator /> */}
        </UserProvider>
      </ApolloProvider>
    );
  }
}
