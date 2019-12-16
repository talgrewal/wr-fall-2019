import React, {Component} from 'react';
import styles from './styles';
import {TouchableOpacity, Text, View} from 'react-native';
import {Mutation} from '@apollo/react-components';
import client from '../../config/api';
import gql from 'graphql-tag';

const CAMPAIGN_UNSUBSCRIBE = gql`
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

const SmallUnsubscribeButton = ({CampaignId, userid}) => {
  return (
    <Mutation mutation={CAMPAIGN_UNSUBSCRIBE} client={client}>
      {updateUser => {
        return (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={async () => {
                try {
                  const editSubscribe = await updateUser({
                    variables: {
                      campaignid: CampaignId,
                      userid: userid,
                    },
                  });
                } catch (e) {
                  throw e;
                }
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Unsubscribe</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Mutation>
  );
};

export default SmallUnsubscribeButton;
