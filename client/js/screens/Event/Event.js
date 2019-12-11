import React from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import eventImage from '../../assets/Imagery/ManAndTree.png';
import commentIcon from '../../assets/miscicons/question.png';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Comment from '../../components/Comment';
import dot from '../../assets/artwork/blackspot.png';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment from 'moment';

const Event = ({title, address, city, date, time, description, comments}) => {
  const nowUTC = moment.utc();

  const [value, onChangeText] = React.useState('');
  let commentItems = [];
  for (let i = 0; i < comments.length; i++) {
    commentItems.push(
      <View key={i} style={styles.commentContainer}>
        <Image style={styles.bullet} source={dot} />
        <Comment
          user={comments[i].user}
          comment={comments[i].comment}
          date={comments[i].date}
        />
      </View>,
    );
  }

  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{address}</Text>
          <Text style={styles.text}>{city}</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addToCalendar(title, nowUTC);
            }}>
            <Text style={styles.buttonText}>Add to my calendar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <Image style={styles.image} source={eventImage} />
          <Text style={styles.text}>{description}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            placeholder="Comment"
            placeholderTextColor="black"
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <Image style={styles.commentIcon} source={commentIcon} />
        </View>
        <View style={styles.comments}>{commentItems}</View>
      </View>
    </ScrollView>
  );
};
const utcDateToString = momentInUTC => {
  let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  // console.warn(s);
  return s;
};

addToCalendar = (title, startDateUTC) => {
  const eventConfig = {
    title,
    startDate: utcDateToString(startDateUTC),
    endDate: utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
    notes: 'tasty!',
    navigationBarIOS: {
      tintColor: 'orange',
      backgroundColor: 'green',
      titleColor: 'blue',
    },
  };
  console.log('Before library call');
  AddCalendarEvent.presentEventCreatingDialog(eventConfig)
    .then(eventInfo => {
      console.warn(JSON.stringify(eventInfo));
    })
    .catch(error => {
      console.warn(error);
    });
};

export default Event;
