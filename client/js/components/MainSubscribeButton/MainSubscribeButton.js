import React, {Component} from 'react';
import styles from '../MainSigninButton/styles';
import {TouchableOpacity, View, ImageBackground, Text} from 'react-native';
import InactiveButton from '../../assets/buttons/Inactivespacebutton.png';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import client from '../../config/api';

const CAMPAIGN_SUBSCRIBE = gql`
  mutation updateUser {
    updateUser(
      data: {campaigns: {connect: {id: "ck3z9pk3wcyey0b094u0yg3sb"}}}
      where: {id: "ck3uqo41p5j6n0b00dus4dfu9"}
    ) {
      id
      name
      campaigns {
        id
        title
      }
    }
  }
`;

const MainSubscribeButton = CampaignId => {
  return (
    <Mutation mutation={CAMPAIGN_SUBSCRIBE} client={client}>
      {updateUser => {
        console.log(updateUser);
        console.log(client);
        return (
          <View style={styles.buttonHolder}>
            <TouchableOpacity onPress={updateUser} style={styles.button}>
              <ImageBackground
                source={InactiveButton}
                style={styles.buttonImage}>
                <Text style={styles.text}>Subscribe</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        );
      }}
    </Mutation>
  );
};

export default MainSubscribeButton;
