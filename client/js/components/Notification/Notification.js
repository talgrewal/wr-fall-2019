import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
    };
  }

  render() {
    return (
      <View style={styles.notificationCard}>
        <View style={styles.contentContainer}>
          <Text style={styles.notificationDot}>{'\u2022'}</Text>
          <Text style={styles.notification}>Notification</Text>
        </View>
      </View>
    );
  }
}
