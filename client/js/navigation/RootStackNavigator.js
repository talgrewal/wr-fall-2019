import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import DrawerNavigation from './DrawerNavigation';
import ConfirmationModal from '../screens/Confirmation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import Onboarding from '../screens/Onboarding';

const AuthStack = createStackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
    },

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
    Confirmation: ConfirmationModal,
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
