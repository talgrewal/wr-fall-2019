import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ImageBackground,
  Alert,
} from 'react-native';
import EmailIcon from '../../assets/signinicons/EmailIcon.png';
import UserIcon from '../../assets/headingelement/loginIcon.png';
import Loader from '../../components/Loader';
import styles from './styles';

import {Mutation, Query} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {withNavigation} from 'react-navigation';
import {createViewer} from '../../config/models';
import Button from '../../assets/buttons/ButtonSPace.png';
import client from '../../config/api';
import {queryViewer} from '../../config/models';

const QUERY_USER = gql`
  query getUser($userId: ID!) {
    user(where: {id: $userId}) {
      id
      email
      name
    }
  }
`;

const EDITPROFILE_MUTATION = gql`
  mutation updateUser($userid: ID!, $name: String!, $email: String!) {
    updateUser(data: {name: $name, email: $email}, where: {id: $userid}) {
      id
      name
      email
    }
  }
`;

class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const user = await queryViewer();
    this.setState({user});
  };

  render() {
    return (
      this.state.user && (
        <Query query={QUERY_USER} variables={{userId: this.state.user.id}}>
          {({loading, error, data}) => {
            if (loading) {return <Loader />;}
            if (error) {return <Text>{error.message}</Text>;}
            if (data) {
              return (
                <Mutation mutation={EDITPROFILE_MUTATION} client={client}>
                  {updateUser => (
                    <View style={styles.accountLoginContainer}>
                      <Form
                        onSubmit={async values => {
                          const newValues = {
                            ...values,
                            userid: this.state.user.id,
                          };
                          try {
                            const updateUserDetails = await updateUser({
                              variables: newValues,
                            });

                            const updateValues = {
                              user: {
                                id: this.state.user.id,
                              },
                              token: this.state.user.token,
                            };

                            await createViewer(updateValues);

                            Alert.alert(
                              'Confirmation',
                              'You have successfully edited the Profile Details',
                              [
                                {
                                  text: 'Cancel',
                                  onPress: () =>
                                    this.props.navigation.navigate(
                                      'EditProfile',
                                    ),
                                  style: 'cancel',
                                },
                                {
                                  text: 'OK',
                                  onPress: () =>
                                    this.props.navigation.navigate('Home'),
                                },
                              ],
                              {cancelable: false},
                            );
                          } catch (e) {
                            this.setState({error: e});
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
                                    style={styles.fieldText}
                                    id="name"
                                    placeholder={data.user.name}
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
                                style={styles.IconImage}
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
                                    style={styles.fieldText}
                                    id="email"
                                    placeholder={data.user.email}
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
                                style={styles.IconImage}
                                source={EmailIcon}
                              />
                            </View>
                            {/* End of email field */}

                            {/* Start of View */}
                            <View style={styles.buttonHolder}>
                              <TouchableOpacity
                                onPress={handleSubmit}
                                style={styles.button}>
                                <ImageBackground
                                  source={Button}
                                  style={styles.buttonImage}>
                                  <Text style={styles.text}>Save</Text>
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
          }}
        </Query>
      )
    );
  }
}

export default withNavigation(EditProfileForm);
