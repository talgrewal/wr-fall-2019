import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Campaigns from './Campaigns';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

export const ALL_CAMPAIGNS_QUERY = gql`
  {
    campaigns {
      id
      title
      category
      description
      image
      subscribers {
        id
        name
        email
      }
      events {
        id
        title
        createdAt
        location
        image
        description
        comments {
          id
          createdAt
          comment
        }
      }
    }
  }
`;

export default class CampaignsContainer extends Component {
  render() {
    console.log(data);
    return (
      <Query query={ALL_CAMPAIGNS_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <Text>Text is loading</Text>;
          if (error) return <Text>{error.message}/</Text>;
          if (data) {
            const campaignData = data.allCampaigns.filter(campaign =>
              Campaign.includes(category.id),
            );

            return <Campaigns CampaignName={CampaignName} />;
          }
        }}
      </Query>
    );
  }
}
