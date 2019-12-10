import React from 'react';
import {Text} from 'react-native';

const Event = ({title, address, date, time, description}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Event;
