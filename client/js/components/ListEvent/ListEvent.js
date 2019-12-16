import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
//import AddToCalendar from '../CalendarButton';
import styles from './styles';
import moment from 'moment';
import {withNavigation} from 'react-navigation';
const ListEvent = ({event, navigation}) => {
  console.log(event);
  const startDay = moment(event.startDate).format('MMM Do, YYYY');
  const endDay = moment(event.endDate).format('MMM Do, YYYY');
  const startTime = moment(event.startDate).format('h:mma');
  const endTime = moment(event.endDate).format('h:mma');

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Event', {event: event})}>
      <Image style={styles.image} source={{uri: event.image}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.text}>{event.location}</Text>
        <View style={styles.borderBottom}></View>
        {startDay === endDay ? (
          <>
            <Text style={styles.text}>
              {startTime} to {endTime}
            </Text>
            <Text style={styles.text}>{startDay}</Text>
          </>
        ) : (
          <Text style={styles.text}>
            {startTime}, {startDay} to {endTime} {endDay}
          </Text>
        )}
        {/* <AddToCalendar event={event} /> */}
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(ListEvent);
