import React from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import {Form, Field} from 'react-final-form';
import eventImage from '../../assets/Imagery/ManAndTree.png';
import commentIcon from '../../assets/miscicons/question.png';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Comment from '../../components/Comment';
import dot from '../../assets/artwork/blackspot.png';
import moment from 'moment';
import {APOLLO_SERVER_ADDRESS} from '../../config/constant';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {withNavigation} from 'react-navigation';
import CalendarButton from '../../components/CalendarButton';
import {queryViewer} from '../../config/models';

const COMMENT_MUTATION = gql`
  mutation updateEvent($title: String!, $username: String!, $comment: String!) {
    updateEvent(
      where: {title: $title}
      data: {comments: {create: {username: $username, comment: $comment}}}
    ) {
      comments {
        comment
        username
      }
    }
  }
`;

const Event = ({navigation}) => {
  const event = {
    ...navigation.state.params.event,
  };
  const user = queryViewer();

  const commentItems = event.comments.map((comment, index) => (
    <View key={index} style={styles.commentContainer}>
      <Image style={styles.bullet} source={dot} />
      <Comment
        user={comment.username}
        comment={comment.comment}
        date={comment.date}
      />
    </View>
  ));

  //Cleaned up moment formatting calls to keep ternaries readable
  const startDay = moment(event.startDate).format('MMM Do, YYYY');
  const endDay = moment(event.endDate).format('MMM Do, YYYY');
  const startTime = moment(event.startDate).format('h:mma');
  const endTime = moment(event.endDate).format('h:mma');
  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>{event.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{event.location}</Text>
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
          <CalendarButton event={event} />
        </View>
        <View style={styles.detailsContainer}>
          <Image style={styles.image} source={eventImage} />
          <Text style={styles.halfSpaceText}>{event.description}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Mutation
            mutation={COMMENT_MUTATION}
            client={
              new ApolloClient({
                uri: APOLLO_SERVER_ADDRESS,
              })
            }>
            {updateEvent => {
              return (
                <Form
                  onSubmit={async values => {
                    try {
                      const updatedEvent = await updateEvent({
                        variables: {
                          title: event.title,
                          comment: values.comment,
                          username: user.name,
                        },
                      });
                    } catch (e) {
                      this.setState({error: e});
                    }
                  }}
                  render={({handleSubmit}) => (
                    <>
                      <Field
                        name="comment"
                        render={({input, meta}) => (
                          <TextInput
                            style={styles.input}
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
                        <Image
                          style={styles.commentIcon}
                          source={commentIcon}
                        />
                      </TouchableOpacity>
                    </>
                  )}
                />
              );
            }}
          </Mutation>
        </View>
        <View style={styles.comments}>{commentItems}</View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Event);
