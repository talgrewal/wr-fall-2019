import React, {Component} from 'react';
import styles from './styles';
import {TouchableOpacity, Text} from 'react-native';

const SmallUnsubscribeButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>Unsubscribe</Text>
    </TouchableOpacity>
  );
};

export default SmallUnsubscribeButton;
