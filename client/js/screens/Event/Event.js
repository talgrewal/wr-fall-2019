import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import eventImage from '../../assets/Imagery/ManAndTree.png';
import commentIcon from '../../assets/miscicons/question.png';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Comment from '../../components/Comment';
import dot from '../../assets/artwork/blackspot.png';

const Event = ({title, address, city, date, time, description, comments}) => {
  let commentItems = [];
  for (let i = 0; i < comments.length; i++) {
    commentItems.push(
      <View style={styles.commentContainer}>
        <Image style={styles.bullet} source={dot} />
        <Comment
          key={i}
          user={comments[i].user}
          comment={comments[i].comment}
          date={comments[i].date}
        />
      </View>,
    );
  }
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
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
          />
          <Image style={styles.commentIcon} source={commentIcon} />
        </View>
        <View style={styles.comments}>{commentItems}</View>
      </View>
    </View>
  );
};

export default Event;
