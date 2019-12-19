import React, {Component} from 'react';
import Text from 'react-native';
import MyCampaigns from './MyCampaigns';
import gql from 'graphql-tag';
import {Query} from '@apollo/react-components';
import Loader from '../../components/Loader';
import {queryViewer} from '../../config/models';

const GET_All_MYCAMPAIGNS = gql`
  query myCampaigns($userid: ID!) {
    user(where: {id: $userid}) {
      id
      email
      name
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
          }
        }
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
    console.log(this.state.user);

    return (
      this.state.user && (
        <Query
          query={GET_All_MYCAMPAIGNS}
          variables={{userid: this.state.user.id}}
          fetchPolicy="network-only">
          {({loading, error, data}) => {
            if (loading) {
              return <Loader />;
            }
            if (error) {
              return <Text>{error.message}</Text>;
            }

            return (
              <>
                {this.state.user.id !== 'ck4asqwfyexf30b00ffbkv3d4' ? (
                  <MyCampaigns
                    myCampaigns={data.user.campaigns}
                    user={this.state.user.id}
                  />
                ) : (
                  <Text>Please log or signup to see your campaigns.</Text>
                )}
              </>
            );
          }}
        </Query>
      )
    );
  }
}
