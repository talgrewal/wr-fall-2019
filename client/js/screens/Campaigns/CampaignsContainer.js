import React, {Component} from 'react';
import {Text} from 'react-native';
import Campaigns from './Campaigns';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Loader from '../../components/Loader';

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
        location
        image
        description
        startDate
        endDate
        comments {
          id
          createdAt
          comment
          username
        }
      }
    }
  }
`;

export default class CampaignsContainer extends Component {
  render() {
    return (
      <Query query={ALL_CAMPAIGNS_QUERY} fetchPolicy="network-only">
        {({loading, error, data}) => {
          if (error) return <Text>{error.message}/</Text>;
          if (loading) return <Loader />;
          if (data) {
            const campaignData = data.campaigns.filter(
              campaign =>
                campaign.category ===
                this.props.navigation.state.params.campaignName,
            );

            return (
              <Campaigns
                campaignName={this.props.navigation.state.params}
                campaignData={campaignData}
              />
            );
          }
        }}
      </Query>
    );
  }
}
