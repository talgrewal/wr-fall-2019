import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import CampaignsScreen from '../screens/Campaigns';
import NotificationsScreen from '../screens/Notifications';
// import {sharedNavigationOptions} from './config';

import {Image} from 'react-native';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      //   ...sharedNavigationOptions(navigation),
      initialRouteName: 'Home',
    }),
  },
);

const CampaignsStack = createStackNavigator(
  {
    Campaigns: CampaignsScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      //   ...sharedNavigationOptions(navigation),
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
      //   ...sharedNavigationOptions(navigation),
      initialRouteName: 'Notifications',
    }),
  },
);

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Campaigns: CampaignsStack,
    Notifications: NotificationsStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;

        if (routeName === 'Home') {
          Icon = (
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/buttonnav/earthlogo.png')}
            />
          );
        } else if (routeName === 'Campaigns') {
          Icon = (
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/buttonnav/bomb.png')}
            />
          );
        } else if (routeName === 'Notifications') {
          Icon = (
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/buttonnav/BellIcon.png')}
            />
          );
        }
        return Icon;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'black',
      tabStyle: {
        backgroundColor: 'white',
      },
      labelStyle: {
        fontSize: 10,
      },
    },
  },
);
