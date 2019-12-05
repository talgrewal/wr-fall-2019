import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-navigation-stack';
import {typography} from '../config/styles';

const Header = props => (
  <View
    style={{
      backgroundColor: 'white',
      overflow: 'hidden',
      height: 80,
      width: '100%',
    }}>
    <Header {...props} />
  </View>
);

const MenuButton = ({navigation}) => (
  <TouchableOpacity onPress={navigation.openDrawer}>
    <Image
      style={{marginLeft: 10, height: 25, width: 25}}
      source={require('../assets/headingelement/Burgermenu.png')}
    />
  </TouchableOpacity>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <Header {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
});
