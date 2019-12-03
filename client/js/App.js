import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content">
          <View>
            <Text>The Revolution is Coming...</Text>
          </View>
        </StatusBar>
      </>
    );
  }
}
