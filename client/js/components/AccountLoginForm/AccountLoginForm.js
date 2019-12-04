import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import {Image, TouchableOpacity, View, Text, TextInput} from 'react-native';
import EmailIcon from '../../assets/headingelement/loginIcon.png';
import PasswordIcon from '../../assets/signinicons/PasswordIcon.png';
import styles from './styles';

class AccountLoginForm extends Component {
  render() {
    return (
      <Form
        onSubmit={values => {
          console.log(e);
        }}
        render={({}) => (
          <View style={styles.AccountLoginContainer}>
            <View style={styles.textField}>
              <View style={styles.subField}>
                <Field
                  name="email"
                  render={({input, meta}) => (
                    <TextInput
                      id="email"
                      placeholder="Email"
                      type="text"
                      inputProps={{
                        autoComplete: 'off',
                        ...input,
                      }}
                    />
                  )}
                />
              </View>
              <Image style={{width: 25, height: 25}} source={EmailIcon} />
            </View>

            <View style={styles.textField}>
              <View style={styles.subField}>
                <Field
                  name="password"
                  render={({input, meta}) => (
                    <TextInput
                      id="password"
                      placeholder="Password"
                      inputProps={{
                        autoComplete: 'off',
                      }}
                      {...input}
                      type="password"
                    />
                  )}
                />
              </View>
              <Image
                style={{width: 25, height: 25, resizeMode: 'contain'}}
                source={PasswordIcon}
              />
            </View>
          </View>
        )}
      />
    );
  }
}

export default AccountLoginForm;
