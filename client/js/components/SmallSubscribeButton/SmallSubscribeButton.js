import React, {Component} from 'react';
import styles from './styles';
import {TouchableOpacity, Text} from 'react-native';

const SmallSubscribeButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>Subscribe</Text>
    </TouchableOpacity>
  );
};

export default SmallSubscribeButton;
