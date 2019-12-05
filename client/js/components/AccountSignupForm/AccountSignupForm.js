import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  CheckBox,
} from 'react-native';
import EmailIcon from '../../assets/signinicons/EmailIcon.png';
import UserIcon from '../../assets/headingelement/loginIcon.png';
import PasswordIcon from '../../assets/signinicons/PasswordIcon.png';
import styles from './styles';
import MainSignupButton from '../MainSignupButton/MainSignupButton';
// import CheckBox from 'react-native-check-box';
// import validate from './helpers/validation';
// import {
//     LOGIN_MUTATION,
//     SIGNUP_MUTATION,
//     VIEWER_QUERY
//   } from "../../config/api";
//   import { graphql, compose } from "react-apollo";

class AccountSignupForm extends Component {
  render() {
    return (
      <View style={styles.AccountLoginContainer}>
        <Form
          onSubmit={values => {
            console.log(e);
          }}
          render={({}) => (
            <View style={styles.formHolder}>
              {/* start of username field */}
              <View style={styles.textField}>
                <Field
                  name="username"
                  style={styles.textField}
                  render={({input, meta}) => (
                    <TextInput
                      style={{fontSize: 16, width: '60%'}}
                      id="username"
                      placeholder="User Name"
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
                  source={UserIcon}
                />
              </View>
              {/* End of username field */}

              {/* start of email field */}
              <View style={styles.textField}>
                <Field
                  name="email"
                  style={styles.textField}
                  render={({input, meta}) => (
                    <TextInput
                      style={{fontSize: 16, width: '60%'}}
                      id="email"
                      placeholder="Email"
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

              {/* Start of password field */}
              <View style={styles.textField}>
                <Field
                  name="password"
                  render={({input, meta}) => (
                    <TextInput
                      id="password"
                      style={{fontSize: 16, width: '60%'}}
                      selectionColor="black"
                      placeholder="Confirm Password"
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

              {/* Start Terms and conditions */}
              <View style={styles.checkboxTerms}>
                <CheckBox height="200" width="200" color="green" />
                <View style={styles.termsContainer}>
                  <Text>I agree to </Text>
                  <Text>terms & conditions</Text>
                </View>
              </View>
              {/* End of Terms and conditions */}

              <MainSignupButton />
            </View>
          )}
        />
      </View>
    );
  }
}

export default AccountSignupForm;
