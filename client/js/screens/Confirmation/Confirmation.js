import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
const Confirmation = ({title}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Confirmation;
