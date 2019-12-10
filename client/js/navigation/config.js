import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-navigation-stack';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {THEME} from '../config';
=======
import styles from './styles';
>>>>>>> Refactored navigation styles
=======
import styles from './styles';
>>>>>>> Fixed about merge problems
=======
import styles from './styles';
>>>>>>> 3ec216898e5a407cb142c08b11873ecb7e5b4292

const AppHeader = props => (
  <View style={styles.appHeader}>
    <Header {...props} />
  </View>
);

const MenuButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Image
        style={styles.burgerIcon}
        source={require('../assets/headingelement/Burgermenu.png')}
      />
    </TouchableOpacity>
  );
};

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <AppHeader {...props} />,
  headerLeft: props => <MenuButton {...props} navigation={navigation} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
});
