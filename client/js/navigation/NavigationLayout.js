import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/Home';
import CampaignsScreen from '../screens/Campaigns';
import NotificationsScreen from '../screens/Notifications';
import AboutScreen from '../screens/About';
import ContactScreen from '../screens/Contact';
import PrivacyScreen from '../screens/Privacy';
import TermsScreen from '../screens/Terms';
import {sharedNavigationOptions} from './config';
import {THEME} from '../config';
import {Image} from 'react-native';
import styles from './styles';

const {
  typography,
  formatting: {icon},
  colors: {white, black},
} = THEME;

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Contact: ContactScreen,
    Terms: TermsScreen,
    Privacy: PrivacyScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        ...sharedNavigationOptions(navigation),
        initialRouteName: 'Home',
      };
    },
  },
);

const CampaignsStack = createStackNavigator(
  {
    Campaigns: CampaignsScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Campaigns',
    }),
  },
);

const NotificationsStack = createStackNavigator(
  {
    Notifications: NotificationsScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Notifications',
    }),
  },
);

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Campaigns: {
      screen: CampaignsStack,
    },
    Notifications: {
      screen: NotificationsStack,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;

        if (routeName === 'Home') {
          Icon = focused ? (
            <Image
              style={styles.icon}
              source={require('../assets/buttonnav/earthlogored.png')}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require('../assets/buttonnav/earthlogo.png')}
            />
          );
        } else if (routeName === 'Campaigns') {
          Icon = focused ? (
            <Image
              style={styles.icon}
              source={require('../assets/buttonnav/bombred.png')}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require('../assets/buttonnav/bomb.png')}
            />
          );
        } else if (routeName === 'Notifications') {
          Icon = focused ? (
            <Image
              style={styles.icon}
              source={require('../assets/buttonnav/bellred.png')}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require('../assets/buttonnav/BellIcon.png')}
            />
          );
        }
        return Icon;
      },
    }),

    tabBarOptions: {
      activeTintColor: black,
      inactiveTintColor: black,
      tabStyle: {
        backgroundColor: white,
      },
      labelStyle: {
        fontSize: typography.smallText,
        fontFamily: typography.mainFont,
      },
    },
  },
);

export default createStackNavigator({Tabs}, {headerMode: 'none'});
