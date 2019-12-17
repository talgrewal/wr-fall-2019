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
import styles from '../AccountLoginForm/styles';
import CheckBox from 'react-native-check-box';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {withNavigation} from 'react-navigation';
import {createViewer} from '../../config/modals';
import InactiveButton from '../../assets/buttons/Inactivespacebutton.png';
import {APOLLO_AUTH_ADDRESS} from '../../config/constant';

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
            uri: APOLLO_AUTH_ADDRESS,
          })
        }>
        {signup => (
          <View style={styles.accountLoginContainer}>
            <Form
              onSubmit={async values => {
                try {
                  const newUserToken = await signup({
                    variables: {
                      email: values.email,
                      password: values.password,
                      name: values.name,
                    },
                  });
                  await createViewer(newUserToken.data.signup);
                  this.props.navigation.navigate('Home');
                } catch (e) {
                  console.log(e);
                  this.setState({error: e});
                }
              }}
              render={({handleSubmit}) => (
                <View style={styles.formHolder}>
                  <Text style={styles.errorText}>
                    {this.state.error
                      ? this.state.error.message
                          .split(': ')[1]
                          .includes('A unique constraint would be violated')
                        ? 'Username or email already exists'
                        : this.state.error.message.split(': ')[1]
                      : ''}
                  </Text>

                  {/* start of username field */}
                  <View style={styles.textField}>
                    <Field
                      name="name"
                      style={styles.textField}
                      render={({input, meta}) => (
                        <TextInput
                          style={styles.fieldText}
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
                    <Image style={styles.IconImage} source={UserIcon} />
                  </View>
                  {/* End of username field */}

                  {/* start of email field */}
                  <View style={styles.textField}>
                    <Field
                      name="email"
                      style={styles.textField}
                      render={({input, meta}) => (
                        <TextInput
                          style={styles.fieldText}
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

                  {/* Start of password field */}
                  <View style={styles.textField}>
                    <Field
                      name="confirmpassword"
                      render={({input, meta}) => (
                        <TextInput
                          id="confirmpassword"
                          style={styles.fieldText}
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
                    <Image style={styles.IconImage} source={PasswordIcon} />
                  </View>
                  {/* end of password field */}

                  {/* Start Terms and conditions */}
                  <Field
                    name="terms"
                    render={({input, meta}) => (
                      <View style={styles.checkboxTerms}>
                        <CheckBox
                          id="terms"
                          style={styles.checkboxHolder}
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
                        source={InactiveButton}
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

export default withNavigation(AccountSignupForm);
