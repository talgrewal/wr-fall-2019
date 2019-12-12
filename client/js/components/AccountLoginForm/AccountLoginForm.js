import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';
import EmailIcon from '../../assets/signinicons/EmailIcon.png';
import PasswordIcon from '../../assets/signinicons/PasswordIcon.png';
import styles from './styles';
import MainSigninButton from '../MainSignupButton/MainSignupButton';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {withNavigation} from 'react-navigation';
import InactiveButton from '../../assets/buttons/Inactivespacebutton.png';
import {APOLLO_CLIENT_ADDRESS} from '../../config/constant';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

class AccountLoginForm extends Component {
  render() {
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        client={
          new ApolloClient({
            uri: APOLLO_CLIENT_ADDRESS,
          })
        }>
        {login => (
          <View style={styles.accountLoginContainer}>
            <Form
              onSubmit={async values => {
                try {
                  const data = await login({
                    variables: {
                      email: values.email,
                      password: values.password,
                    },
                  });

                  if (data) {
                    this.props.navigation.navigate('Home');
                  }
                } catch (e) {
                  console.log(e);
                }
              }}
              render={({handleSubmit}) => (
                <View style={styles.formHolder}>
                  {/* start of email field */}
                  <View style={styles.textField}>
                    <Field
                      name="email"
                      render={({input, meta}) => (
                        <TextInput
                          style={styles.fieldText}
                          id="email"
                          placeholder="User Email"
                          placeholderTextColor="black"
                          type="text"
                          inputProps={{
                            autoComplete: 'off',
                          }}
                          {...input}
                        />
                      )}
                    />
                    <Image style={styles.IconImage} source={EmailIcon} />
                  </View>
                  {/* End of email field */}

                  {/* Start of password field */}
                  <View style={styles.textField}>
                    <Field
                      name="password"
                      render={({input, meta}) => (
                        <TextInput
                          id="password"
                          style={styles.fieldText}
                          selectionColor="black"
                          placeholder="Password"
                          secureTextEntry={true}
                          placeholderTextColor="black"
                          inputProps={{
                            autoComplete: 'off',
                          }}
                          {...input}
                          type="password"
                        />
                      )}
                    />
                    <Image style={styles.IconImage} source={PasswordIcon} />
                  </View>
                  {/* end of password field */}

                  {/* <MainSigninButton /> */}

                  {/* Start of View */}
                  <View style={styles.buttonHolder}>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.button}>
                      <ImageBackground
                        source={InactiveButton}
                        style={styles.buttonImage}>
                        <Text style={styles.text}>Sign in</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  {/* Start of View */}
                </View>
              )}
            />
          </View>
        )}
      </Mutation>
    );
  }
}

export default withNavigation(AccountLoginForm);
