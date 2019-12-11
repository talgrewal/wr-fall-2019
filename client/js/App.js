import React, {Component} from 'react';
import Login from './screens/Login';
import RootStackNavigator from './navigation/RootStackNavigator';
import Event from './screens/Event';

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
      <Event
        title="Getting in Touch With Nature"
        description="We are going to find trees and touch them. This is important to get in touch with and the feeling tree today. Have you ever had the dream where you could if when any of could do anything?"
        address="1490 W Broadway #200"
        city="Vancouver, BC"
        time="9am - 5pm"
        date="Jan. 5th, 2019"
        comments={comments}
      />
    );
  }
}
