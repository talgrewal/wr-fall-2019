import {createAppContainer} from 'react-navigation';
import DrawerNavigation from './DrawerNavigation';
import {createStackNavigator} from 'react-navigation-stack';

import About from '../screens/About';
import Contact from '../screens/Contact/';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: DrawerNavigation,
    },
    {
      headerMode: 'none',
      mode: 'modal',
    },
  ),
);
