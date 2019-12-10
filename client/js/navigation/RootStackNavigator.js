import {createAppContainer} from 'react-navigation';
import DrawerNavigation from './DrawerNavigation';
import Confirmation from '../screens/Confirmation';
import {createStackNavigator} from 'react-navigation-stack';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: DrawerNavigation,
      Confirmation: Confirmation,
    },
    {
      headerMode: 'none',
      mode: 'modal',
    },
  ),
);
