import React from 'react';
import {View} from 'react-native';
import AddToCalendar from '../../components/';
import styles from './styles';

export default ListEvent = ({event}) => {
  console.log(event);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Event', {event: event})}>
      <Image style={styles.image} source={{uri: event.image}} />
      <View style={styles.textContainer}>
        <Text>{event.title}</Text>
        <Text>{event.location}</Text>
        <View style={styles.borderBottom}></View>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.time}>{event.time}</Text>
        <AddToCalendar event={event} />
      </View>
    </TouchableOpacity>
  );
};
