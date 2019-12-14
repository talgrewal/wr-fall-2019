import React, {Component} from 'react';
import styles from '../MainSigninButton/styles';
import {TouchableOpacity, View, ImageBackground, Text} from 'react-native';
import InactiveButton from '../../assets/buttons/Inactivespacebutton.png';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import client from '../../config/api';
import {withNavigation} from 'react-navigation';

const CAMPAIGN_SUBSCRIBE = gql`
  mutation updateUser($campaignid: ID!, $userid: ID!) {
    updateUser(
      data: {campaigns: {connect: {id: $campaignid}}}
      where: {id: $userid}
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

<<<<<<< HEAD
const MainSubscribeButton = ({CampaignId, navigation}) => {
=======
const MainSubscribeButton = ({CampaignId, ViewerId, userId}) => {
>>>>>>> develop
  return (
    <Mutation mutation={CAMPAIGN_SUBSCRIBE} client={client}>
      {updateUser => {
        return (
          <View style={styles.buttonHolder}>
            <TouchableOpacity
              onPress={async () => {
                try {
                  const editSubscribe = await updateUser({
                    variables: {
                      campaignid: CampaignId,

                      userid: userId,
                    },
                  });

                  navigation.navigate('Confirmation');
                } catch (e) {
                  console.log(e);
                }
              }}
              style={styles.buttonNoBackground}>
              <Text style={styles.text}>Subscribe</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Mutation>
  );
};

export default withNavigation(MainSubscribeButton);
