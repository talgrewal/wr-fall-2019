import React, {Component} from 'react';
import styles from '../MainSigninButton/styles';
import {TouchableOpacity, View, ImageBackground, Text} from 'react-native';
import activeButton from '../../assets/buttons/activespacebutton.png';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import client from '../../config/api';

const CAMPAIGN_UNSUBSCRIBE = gql`
  mutation updateCampaign($campaignid: ID!, $userid: ID!) {
    updateCampaign(
      data: {subscribers: {disconnect: {id: $userid}}}
      where: {id: $campaignid}
    ) {
      id
      title
      subscribers {
        id
        email
        name
      }
    }
  }
`;

const MainSubscribeButton = ({CampaignId, userId}) => {
  return (
    <Mutation mutation={CAMPAIGN_UNSUBSCRIBE} client={client}>
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
