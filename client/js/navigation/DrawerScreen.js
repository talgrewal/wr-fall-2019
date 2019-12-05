import React, {Component} from 'react';
import {withNavigation} from 'react-navigation';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

class DrawerScreen extends Component {
  static navigationOptions = {
    title: 'DrawerScreen',
  };

  navigateToScreen = route => {
    this.props.navigation.navigate(route);

    this.props.navigation.closeDrawer();
  };

  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => this.navigateToScreen('About')}>
          <Text>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen('Contact')}>
          <Text>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen('Terms')}>
          <Text>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen('Privacy')}>
          <Text>Privacy Policy</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default withNavigation(DrawerScreen);
