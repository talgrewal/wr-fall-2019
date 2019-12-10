import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Login from './screens/Login';
import RootStackNavigator from './navigation/RootStackNavigator';
<<<<<<< HEAD
import Event from './screens/Event';
export default class App extends Component {
  render() {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    return (
      <Event
        title="Getting in Touch With Nature"
        description="We are going to find trees and touch them. This is important to get in touch with and the feeling tree today."
        address="1490 W Broadway #200"
        city="Vancouver, BC"
        time="9am - 5pm"
        date="Jan. 5th, 2019"
      />
    );
=======
    return <RootStackNavigator />;
>>>>>>> Stashed changes
=======
    return <RootStackNavigator />;
>>>>>>> Stashed changes
=======
import Confirmation from './screens/Confirmation';

export default class App extends Component {
  render() {
    return (
      <>
        <RootStackNavigator />
      </>
    );
>>>>>>> c110d6c2d2c0fad9c2614d7b16eecb5f84f89910
  }
}
