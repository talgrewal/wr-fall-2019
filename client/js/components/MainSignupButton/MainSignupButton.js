import React, {Component} from 'react';
import styles from './styles';
import {TouchableOpacity, View, ImageBackground, Text} from 'react-native';

const MainSignupButton = () => {
  return (
    <View style={styles.buttonHolder}>
      <TouchableOpacity style={styles.button}>
        <ImageBackground
          source={require('../../assets/buttons/Inactivespacebutton.png')}
          style={styles.buttonImage}>
          <Text style={styles.text}>Sign Up</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default MainSignupButton;
