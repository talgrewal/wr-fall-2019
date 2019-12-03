import React, {Component} from 'react';
import styles from './styles';
import {Form, Field} from 'react-final-form';
import {Text, View} from 'react-native';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null,
    };
  }

  render() {
    return (
      <View>
        <Text>Login here</Text>
        <Text>Username: ________</Text>
        <Text>Password: ________</Text>
      </View>
    );
  }
}

export default AccountForm;
