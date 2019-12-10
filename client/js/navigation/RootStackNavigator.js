import {createAppContainer} from 'react-navigation';
import DrawerNavigation from './DrawerNavigation';
import ConfirmationModal from '../screens/Confirmation';
import {createStackNavigator} from 'react-navigation-stack';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: DrawerNavigation,
      Confirmation: ConfirmationModal,
    },
    {
      headerMode: 'none',
      mode: 'modal',
    },
  ),
);
