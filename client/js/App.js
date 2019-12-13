import React, {Component} from 'react';
import Login from './screens/Login';
import RootStackNavigator from './navigation/RootStackNavigator';
import Event from './screens/Event';
import UserProvider from './context/UserProvider';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';

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
          <Event
            title="Getting in Touch With Nature"
            description="We are going to find trees and touch them. This is important to get in touch with and the feeling tree today. Have you ever had the dream where you could if when any of could do anything?"
            location="1490 W Broadway #200, Vancouver, BC"
            startDate="2019-12-25T19:25:55.846"
            endDate="2019-12-25T19:26:55.846"
            comments={comments}
          />
          {/* <RootStackNavigator /> */}
        </UserProvider>
      </ApolloProvider>
    );
  }
}
