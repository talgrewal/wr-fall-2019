import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/Loader';
import Onboarding from '../Onboarding/Onboarding';
import {queryOnBoarding} from '../../config/modals';

export default class AuthLoadingScreenContainer extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('user');
    let onBoarding = await queryOnBoarding();
    if (onBoarding === !null) {
      this.props.navigation.navigate(userToken ? 'App' : 'Login');
    } else {
      this.props.navigation.navigate('Onboarding');
    }
  };

  render() {
    return (
      <View>
        <Loader />
      </View>
    );
  }
}
