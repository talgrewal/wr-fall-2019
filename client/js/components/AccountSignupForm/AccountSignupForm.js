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
import UserIcon from '../../assets/headingelement/loginIcon.png';
import PasswordIcon from '../../assets/signinicons/PasswordIcon.png';
import styles from './styles';
import CheckBox from 'react-native-check-box';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        id
      }
    }
  }
`;

class AccountSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        client={
          new ApolloClient({
            uri: 'http://157.245.224.214:8000/',
          })
        }>
        {(signup, {data, loading, error}) => (
          <View style={styles.AccountLoginContainer}>
            <Form
              onSubmit={async values => {
                try {
                  console.log(values);
                  await signup({
                    variables: {
                      email: values.email,
                      password: values.password,
                      name: values.name,
                    },

                    if(data) {
                      navigation.navigate('AuthLoadingScreen');
                    },

                    // todo add navigate to home page.
                  });
                } catch (e) {
                  console.log(e);
                }
              }}
              render={({handleSubmit}) => (
                <View style={styles.formHolder}>
                  {/* start of username field */}
                  <View style={styles.textField}>
                    <Field
                      name="name"
                      style={styles.textField}
                      render={({input, meta}) => (
                        <TextInput
                          style={{fontSize: 16, width: '60%'}}
                          id="name"
                          placeholder="User Name"
                          placeholderTextColor="black"
                          type="text"
                          inputProps={{
                            autoComplete: 'off',
                          }}
                          {...input}
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
                          }}
                          {...input}
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
                    <Image
                      style={{width: 20, height: 20, resizeMode: 'contain'}}
                      source={PasswordIcon}
                    />
                  </View>
                  {/* end of password field */}

                  {/* Start of password field */}
                  <View style={styles.textField}>
                    <Field
                      name="confirmpassword"
                      render={({input, meta}) => (
                        <TextInput
                          id="confirmpassword"
                          style={{fontSize: 16, width: '60%'}}
                          selectionColor="black"
                          placeholder="Confirm Password"
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
                    <Image
                      style={{width: 20, height: 20, resizeMode: 'contain'}}
                      source={PasswordIcon}
                    />
                  </View>
                  {/* end of password field */}

                  {/* Start Terms and conditions */}
                  <Field
                    name="terms"
                    render={({input, meta}) => (
                      <View style={styles.checkboxTerms}>
                        <CheckBox
                          id="terms"
                          style={{borderRadius: 0, padding: 10}}
                          onClick={() => {
                            this.setState({
                              isChecked: !this.state.isChecked,
                            });
                          }}
                          isChecked={this.state.isChecked}
                          leftText={'CheckBox'}
                        />
                        <View style={styles.termsContainer}>
                          <Text>I agree to </Text>
                          <Text>terms & conditions</Text>
                        </View>
                      </View>
                    )}
                  />
                  {/* End of Terms and conditions */}

                  {/* Start of View */}
                  <View style={styles.buttonHolder}>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.button}>
                      <ImageBackground
                        source={require('../../assets/buttons/Inactivespacebutton.png')}
                        style={styles.buttonImage}>
                        <Text style={styles.text}>Sign Up</Text>
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

export default AccountSignupForm;
