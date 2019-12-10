import React from 'react';
import {Text, View, Image} from 'react-native';
import eventImage from '../../assets/Imagery/ManAndTree.png';
import styles from './styles';
const Event = ({title, location, date, time, description}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{location}</Text>
        <Text style={styles.text}>{time}</Text>
        <Text style={styles.text}>{date}</Text>
        <Image style={styles.image} source={eventImage} />
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

export default Event;
