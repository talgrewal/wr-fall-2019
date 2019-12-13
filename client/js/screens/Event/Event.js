import React from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import {Form, Field} from 'react-final-form';
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

const COMMENT_MUTATION = gql`
  mutation createComment($username: String!, $comment: String!) {
    createComment(data: {username: $username, comment: $comment}) {
      id
    }
  }
`;

const UPDATE_EVENT_MUTATION = `gql
mutation updateEvent($id: String!) {
  updateEvent(data: {comments: $id}) {
    id
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
  const [value, onChangeText] = React.useState('');

  //event object is passed into the addToCalendar so it doesnt need comments or user
  const event = {
    title: title,
    location: location,
    startDate: startDate,
    endDate: endDate,
    description: description,
  };

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

  let commentId = null;

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
              addToCalendar(event);
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
                    console.log(values);
                    const commentId = await comment({
                      variables: {
                        username: user.name,
                        comment: values.comment,
                      },
                    });
                    console.log('Comment Id: ', commentId);

                    // return (
                    //   <Mutation
                    //     mutation={UPDATE_EVENT_MUTATION}
                    //     client={
                    //       new ApolloClient({
                    //         uri: APOLLOCLIENTADDRESS,
                    //       })
                    //     }>
                    //     {updateEvent => <Text>What goes in here?</Text>}
                    //   </Mutation>
                    // );
                    //ADD COMMENT TO EVENT MUTATION
                  } catch (e) {
                    console.log(e);
                    this.setState({error: e});
                  }
                }}
                render={({handleSubmit}) => (
                  <>
                    <Field
                      name="name"
                      render={({input, meta}) => (
                        <TextInput
                          style={styles.fieldText}
                          id="comment"
                          placeholder="Comment"
                          placeholderTextColor="black"
                          type="text"
                          inputProps={{
                            autoComplete: 'off',
                          }}
                          {...input}
                        />
                      )}
                    />
                    <TouchableOpacity onPress={handleSubmit}>
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

addToCalendar = event => {
  const eventConfig = {
    title: event.title,
    startDate: utcDateToString(event.startDateUTC),
    endDate: utcDateToString(event.endDateUTC),
    location: event.location,
    notes: event.description,
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
