import React, {Component} from 'react';
import styles from './styles';
import {Text, View} from 'react-native';

export default class CampaignSubscriber extends Component {
  render() {
    const {user, comment, date} = this.props;
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.name}>{user}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    );
  }
}
