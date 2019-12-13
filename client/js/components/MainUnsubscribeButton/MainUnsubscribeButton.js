import React, {Component} from 'react';
import styles from '../MainSigninButton/styles';
import {TouchableOpacity, View, ImageBackground, Text} from 'react-native';
import activeButton from '../../assets/buttons/activespacebutton.png';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import client from '../../config/api';

const CAMPAIGN_SUBSCRIBE = gql`
  mutation updateUser($campaignid: ID!, $userid: ID!) {
    updateUser(
      data: {campaigns: {disconnect: {id: $campaignid}}}
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

const MainSubscribeButton = ({CampaignId}) => {
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
                      userid: 'ck3yzox88i13o0b00u0ak6b3h',
                    },
                  });
                } catch (e) {}
              }}
              style={styles.button}>
              <ImageBackground source={activeButton} style={styles.buttonImage}>
                <Text style={styles.textWhite}>Unsubscribe</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        );
      }}
    </Mutation>
  );
};

export default MainSubscribeButton;
