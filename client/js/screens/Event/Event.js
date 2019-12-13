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
import {APOLLOCLIENTADDRESS} from '../../config/constant';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Form} from 'react-final-form';

const COMMENT_MUTATION = gql`
  mutation comment($username: String!, $comment: String!) {
    comment(username: $username, comment: $comment) {
      comments {
        id
        username
        createdAt
        comment
      }
    }
  }
`;

const Event = ({
  title,
  location,
  startDate,
  endDate,
  description,
  comments,
  user,
}) => {
  const commentItems = comments.map(comment => (
    <View style={styles.commentContainer}>
      <Image style={styles.bullet} source={dot} />
      <Comment
        user={comment.user}
        comment={comment.comment}
        date={comment.date}
      />
    </View>
  ));

  //Cleaned up moment formatting calls to keep ternaries readable
  const startDay = moment(startDate).format('MMM Do, YYYY');
  const endDay = moment(endDate).format('MMM Do, YYYY');
  const startTime = moment(startDate).format('h:mma');
  const endTime = moment(endDate).format('h:mma');
  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{location}</Text>
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
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addToCalendar(title, location, description, startDate, endDate);
            }}>
            <Text style={styles.buttonText}>Add to my calendar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <Image style={styles.image} source={eventImage} />
          <Text style={styles.halfSpaceText}>{description}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Mutation
            mutation={COMMENT_MUTATION}
            client={
              new ApolloClient({
                uri: APOLLOCLIENTADDRESS,
              })
            }>
            {comment => (
              <Form
                onSubmit={async values => {
                  try {
                    const newComment = await comment({
                      variables: {
                        username: 'Ciaran',
                        comment: values.comment,
                      },
                    });
                    await createViewer(newUserToken.data.signup);
                    this.props.navigation.navigate('Home');
                  } catch (e) {
                    console.log(e);
                    this.setState({error: e});
                  }
                }}
                render={({handleSubmit}) => (
                  <>
                    <TextInput
                      multiline
                      placeholder="Comment"
                      placeholderTextColor="black"
                      style={styles.input}
                      onChangeText={text => onChangeText(text)}
                      value={value}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        handleSubmit;
                      }}>
                      <Image style={styles.commentIcon} source={commentIcon} />
                    </TouchableOpacity>
                  </>
                )}
              />
            )}
          </Mutation>
        </View>
        <View style={styles.comments}>{commentItems}</View>
      </View>
    </ScrollView>
  );
};
const utcDateToString = momentInUTC => {
  let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  return s;
};

addToCalendar = (title, location, description, startDateUTC, endDateUTC) => {
  const eventConfig = {
    title,
    startDate: utcDateToString(startDateUTC),
    endDate: utcDateToString(endDateUTC),
    location: location,
    notes: description,
  };
  AddCalendarEvent.presentEventCreatingDialog(eventConfig)
    .then(eventInfo => {
      console.warn(JSON.stringify(eventInfo));
    })
    .catch(error => {
      console.warn(error);
    });
};

export default Event;
