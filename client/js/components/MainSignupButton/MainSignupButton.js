import React, {Component} from 'react';
import styles from './styles';
import {TouchableOpacity, View, ImageBackground, Text} from 'react-native';
import InactiveButton from '../../assets/buttons/Inactivespacebutton.png';

const MainSignupButton = onPress => {
  return (
    <View style={styles.buttonHolder}>
      <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
        <ImageBackground source={InactiveButton} style={styles.buttonImage}>
          <Text style={styles.text}>Sign Up</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default MainSignupButton;
