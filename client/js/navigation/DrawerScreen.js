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
      <SafeAreaView
        style={{
          backgroundColor: '#242424',
          height: '100%',
          width: '100%',
          marginLeft: 0,
        }}>
        <TouchableOpacity
          onPress={() => this.navigateToScreen('About')}
          style={{marginTop: 80}}>
          <Text style={{fontSize: 20, padding: 25, color: 'white'}}>
            About Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen('Contact')}>
          <Text style={{fontSize: 20, padding: 25, color: 'white'}}>
            Contact Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen('Terms')}>
          <Text style={{fontSize: 20, padding: 25, color: 'white'}}>
            Terms & Conditions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToScreen('Privacy')}>
          <Text style={{fontSize: 20, padding: 25, color: 'white'}}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default withNavigation(DrawerScreen);
