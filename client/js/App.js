import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Login from './screens/Login';
import RootStackNavigator from './navigation/RootStackNavigator';
import Event from './screens/Event';
export default class App extends Component {
  render() {
    return (
      <Event
        title="Getting in Touch With Nature"
        description="We are going to find trees and touch them. This is important to get in touch with and the feeling tree today."
        location="1490 W Broadway #200, Vancouver, BC V6H 4E8"
        time="9am - 5pm"
        date="Jan. 5th, 2019"
      />
    );
  }
}
