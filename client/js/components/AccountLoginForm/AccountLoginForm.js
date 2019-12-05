import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import {Image, TouchableOpacity, View, Text, TextInput} from 'react-native';
import EmailIcon from '../../assets/signinicons/EmailIcon.png';
import PasswordIcon from '../../assets/signinicons/PasswordIcon.png';
import styles from './styles';
import MainSigninButton from '../MainSignupButton/MainSignupButton';
// import validate from './helpers/validation';
// import {
//   LOGIN_MUTATION,
//   SIGNUP_MUTATION,
//   VIEWER_QUERY
// } from "../../config/api";
// import { graphql, compose } from "react-apollo";

class AccountLoginForm extends Component {
  render() {
    return (
      <View style={styles.AccountLoginContainer}>
        <Form
          onSubmit={values => {
            console.log(e);
          }}
          render={({}) => (
            <View style={styles.formHolder}>
              {/* start of email field */}
              <View style={styles.textField}>
                <Field
                  name="email"
                  style={styles.textField}
                  render={({input, meta}) => (
                    <TextInput
                      style={{fontSize: 16, width: '60%'}}
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
                <Image
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                  source={EmailIcon}
                />
              </View>
              {/* End of email field */}

              {/* Start of password field */}
              <View style={styles.textField}>
                <Field
                  name="password"
                  render={({input, meta}) => (
                    <TextInput
                      id="password"
                      style={{fontSize: 16, width: '60%'}}
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
                <Image
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                  source={PasswordIcon}
                />
              </View>
              {/* end of password field */}

              <MainSigninButton />
            </View>
          )}
        />
      </View>
    );
  }
}

export default AccountLoginForm;
