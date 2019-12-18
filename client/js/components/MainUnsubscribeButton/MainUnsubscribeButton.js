import React, {Component} from 'react';
import styles from '../MainSigninButton/styles';
import {TouchableOpacity, View, ImageBackground, Text} from 'react-native';
import activeButton from '../../assets/buttons/activespacebutton.png';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import client from '../../config/api';
import {withNavigation} from 'react-navigation';

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

const MainUnsubscribeButton = ({CampaignId, navigation, userId}) => {
  const campaignTitle = navigation.state.params.campaign.title;
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
                  navigation.navigate('Confirmation', {
                    subscribeMessage: false,
                    campaignTitle: campaignTitle,
                  });
                } catch (e) {
                  console.log(e);
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

export default withNavigation(MainUnsubscribeButton);
