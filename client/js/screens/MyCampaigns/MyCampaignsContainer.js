import React, {Component} from 'react';
import Text from 'react-native';
import MyCampaigns from './MyCampaigns';
import gql from 'graphql-tag';
import {Query} from '@apollo/react-components';
import client from '../../config/api';
import Loader from '../../components/Loader';
import {queryViewer} from '../../config/modals';

const GET_All_MYCAMPAIGNS = gql`
  query myCampaigns($userid: ID!) {
    user(where: {id: $userid}) {
      id
      email
      name
      campaigns {
        id
        title
        description
        category
        image
      }
    }
  }
`;

export default class MyCampaignsContainer extends Component {
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
    console.log('state', this.state.user && this.state.user.id);
    return (
      this.state.user && (
        <Query
          query={GET_All_MYCAMPAIGNS}
          variables={{userid: this.state.user.id}}>
          {({loading, error, data}) => {
            if (loading) return <Loader />;
            if (error) return <Text>{error.message}</Text>;

            console.log(data.user.campaigns);
            return (
              <MyCampaigns
                myCampaigns={data.user.campaigns}
                user={this.state.user.id}
              />
            );
          }}
        </Query>
      )
    );
  }
}
