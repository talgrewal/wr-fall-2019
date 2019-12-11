import React, {Component} from 'react';
import styles from './styles';
import {TouchableOpacity, View, ImageBackground, Text} from 'react-native';
import InactiveButton from '../../assets/buttons/Inactivespacebutton.png';

const MainSigninButton = () => {
  return (
    <View style={styles.buttonHolder}>
      <TouchableOpacity style={styles.button}>
        <ImageBackground source={InactiveButton} style={styles.buttonImage}>
          <Text style={styles.text}>Sign in</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default MainSigninButton;
