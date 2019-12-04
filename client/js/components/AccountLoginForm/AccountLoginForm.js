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
                  style={styles.typefield}
                  render={({input, meta}) => (
                    <TextInput
                      style={{fontSize: 16, fontWeight: 'bold'}}
                      id="email"
                      placeholder="User Email"
                      placeholderTextColor="black"
                      type="text"
                      inputProps={{
                        autoComplete: 'off',
                        ...input,
                      }}
                    />
                  )}
                />
              </View>
              <Image
                style={{width: 20, height: 20, resizeMode: 'contain'}}
                source={EmailIcon}
              />
            </View>

            <View style={styles.hairline} />

            <View style={styles.textField}>
              <View style={styles.subField}>
                <Field
                  name="password"
                  render={({input, meta}) => (
                    <TextInput
                      id="password"
                      style={{fontSize: 16, fontWeight: 'bold'}}
                      selectionColor="black"
                      placeholder="Password"
                      placeholderTextColor="black"
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
                style={{width: 20, height: 20, resizeMode: 'contain'}}
                source={PasswordIcon}
              />
            </View>

            <View style={styles.hairline} />
          </View>
        )}
      />
    );
  }
}

export default AccountLoginForm;
