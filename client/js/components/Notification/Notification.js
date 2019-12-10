import React, {Component} from 'react';
import styles from './styles';

export default class Notification extends Component {
  constructor() {
    super(props);
    this.state = {
      seen: false,
    };
  }

  render() {
    return (
      <View>
        <Text>Notification</Text>
      </View>
    );
  }
}
