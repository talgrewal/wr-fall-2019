import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import CampaignsScreen from '../screens/Campaigns';
import NotificationsScreen from '../screens/Notifications';
import {sharedNavigationOptions} from './config';
import BellIcon from '../assets/buttonnav/BellIcon.png';
// import bomb from '../assets/buttonnav/bomb@3x.png';
// import earth from '../assets/buttonnav/earthlogo2.2@3x.png';
import Image from 'react-native';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Home',
      title: 'Home',
    }),
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
      title: 'Campaigns',
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
      title: 'Notifications',
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

        // if (routeName === 'Home') {
        //   <Image style={{width: 25, height: 25}} source={require({earth})} />;
        // } else if (routeName === 'Campaigns') {
        //   <Image style={{width: 25, height: 25}} source={require({bomb})} />;
        // } else if (routeName === 'Notifications') {
        //   <Image
        //     style={{width: 25, height: 25}}
        //     source={require({BellIcon})}
        //   />;
        // }
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
