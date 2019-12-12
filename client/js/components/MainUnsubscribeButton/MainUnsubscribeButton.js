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
        console.log('this is the first one' + CampaignId);
        // console.log(client);
        return (
          <View style={styles.buttonHolder}>
            <TouchableOpacity
              onPress={async () => {
                try {
                  console.log('this is the second one' + CampaignId);
                  const editSubscribe = await updateUser({
                    variables: {
                      campaignid: CampaignId,
                      userid: 'ck3ugq1s54lj20b00lud52xul',
                    },
                  });
                  console.log('third one' + CampaignId);
                  //await createViewer(editSubscribe.updateUser);
                } catch (e) {
                  console.log('This is the error' + e);
                }
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
