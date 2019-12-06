import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import DrawerNavigation from './DrawerNavigation';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const AppStack = createStackNavigator(
  {
    Layout: DrawerNavigation,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
