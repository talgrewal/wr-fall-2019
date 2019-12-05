import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import CampaignsScreen from '../screens/Campaigns';
import NotificationsScreen from '../screens/Notifications';
import {typography} from '../config/styles';
import {Image} from 'react-native';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
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
          Icon = focused ? (
            <Image
              style={{width: 30, height: 30, marginTop: 5}}
              source={require('../assets/buttonnav/earthlogored.png')}
            />
          ) : (
            <Image
              style={{width: 30, height: 30, marginTop: 5}}
              source={require('../assets/buttonnav/earthlogo.png')}
            />
          );
        } else if (routeName === 'Campaigns') {
          Icon = focused ? (
            <Image
              style={{width: 30, height: 30, marginTop: 5}}
              source={require('../assets/buttonnav/bombred.png')}
            />
          ) : (
            <Image
              style={{width: 30, height: 30, marginTop: 5}}
              source={require('../assets/buttonnav/bomb.png')}
            />
          );
        } else if (routeName === 'Notifications') {
          Icon = focused ? (
            <Image
              style={{width: 30, height: 30, marginTop: 5}}
              source={require('../assets/buttonnav/bellred.png')}
            />
          ) : (
            <Image
              style={{width: 30, height: 30, marginTop: 5}}
              source={require('../assets/buttonnav/BellIcon.png')}
            />
          );
        }
        return Icon;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      tabStyle: {
        backgroundColor: 'white',
      },
      labelStyle: {
        fontSize: 12,
        fontFamily: typography.fontMainLight,
      },
    },
  },
);
