import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-navigation-stack';
import {typography} from '../config/styles';

const AppHeader = props => (
  <View
    style={{
      backgroundColor: 'white',
      overflow: 'hidden',
      height: 150,
      width: '100%',
    }}>
    <Image
      style={{height: '30%', width: '60%', resizeMode: 'contain'}}
      source={require('../assets/headingelement/Headerlogo.png')}
    />
    <Header {...props} />
  </View>
);

const MenuButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Image
        style={{marginLeft: 25, height: 25, width: 25}}
        source={require('../assets/headingelement/Burgermenu.png')}
      />
    </TouchableOpacity>
  );
};

const ProfileButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Image
        style={{marginRight: 25, height: 25, width: 25}}
        source={require('../assets/headingelement/Signedin.png')}
      />
    </TouchableOpacity>
  );
};

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <AppHeader {...props} />,
  headerLeft: props => <MenuButton {...props} navigation={navigation} />,
  headerRight: props => <ProfileButton {...props} navigation={navigation} />,

  headerStyle: {
    backgroundColor: 'transparent',
  },
});
