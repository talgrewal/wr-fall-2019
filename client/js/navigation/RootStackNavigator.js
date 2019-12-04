import {createAppContainer} from 'react-navigation';
import NavigationLayout from './NavigationLayout';
import {createStackNavigator} from 'react-navigation-stack';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
    },
    {
      headerMode: 'none',
      mode: 'modal',
    },
  ),
);
