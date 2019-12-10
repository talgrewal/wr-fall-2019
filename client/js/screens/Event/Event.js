import React from 'react';
import {Text, View, Image} from 'react-native';
import eventImage from '../../assets/Imagery/ManAndTree.png';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Event = ({title, address, city, date, time, description}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{address}</Text>
          <Text style={styles.text}>{city}</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>Add to my calendar</Text>
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <Image style={styles.image} source={eventImage} />
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Event;
