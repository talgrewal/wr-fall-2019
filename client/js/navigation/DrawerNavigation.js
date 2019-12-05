import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import BottomTabNav from './NavigationLayout';
import DrawerScreen from './DrawerScreen';
import About from '../screens/About';
import Contact from '../screens/Contact/';

export default createDrawerNavigator(
  {
    Home: BottomTabNav,
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
  },
);
