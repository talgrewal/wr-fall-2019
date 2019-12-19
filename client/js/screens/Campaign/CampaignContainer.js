import React, {Component} from 'react';
import {Text} from 'react-native';
import Campaign from './Campaign';
import {queryViewer} from '../../config/models';
import gql from 'graphql-tag';
import {withNavigation} from 'react-navigation';
import {Mutation, Query, Subscription} from '@apollo/react-components';
import client from '../../config/api';
import Loader from '../../components/Loader/';

const CAMPAIGN_SUBSCRIPTION_ALL = gql`
  subscription($campaignId: ID!) {
    campaign(where: {node: {id: $campaignId}}) {
      mutation
      node {
        subscribers {
          id
          email
          password
          name
        }
      }
    }
  }
`;

class CampaignContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const user = await queryViewer();
    this.setState({user});
  };
  render() {
    return (
      this.state.user &&
      this.props.navigation.state.params.campaign.id && (
        <Subscription
          subscription={CAMPAIGN_SUBSCRIPTION_ALL}
          variables={{
            campaignId: this.props.navigation.state.params.campaign.id,
          }}>
          {({loading, error, data}) => {
            if (error) return <Text>{error.message}</Text>;

            return (
              <Campaign
                campaigns={data && data.campaign.node.subscribers}
                user={this.state.user}
              />
            );
          }}
        </Subscription>
      )
    );
  }
}

export default CampaignContainer;
