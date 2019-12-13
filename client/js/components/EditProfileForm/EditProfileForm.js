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

import styles from './styles';

import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {withNavigation} from 'react-navigation';

import Button from '../../assets/buttons/ButtonSPace.png';
import {APOLLO_CLIENT} from '../../config/api';
import {queryViewer} from '../../config/modals';

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
    this.state = {};
  }

  render() {
    const Viewer = async () => {
      return await queryViewer();
    };

    console.log(Viewer());

    return (
      <Mutation
        mutation={EDITPROFILE_MUTATION}
        client={
          new ApolloClient({
            uri: APOLLO_CLIENT,
          })
        }>
        {updateUser => (
          <View style={styles.accountLoginContainer}>
            <Form
              onSubmit={values => {
                this.props.navigation.navigate('Home');
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
}

export default withNavigation(EditProfileForm);
