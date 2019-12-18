import React, {Component} from 'react';
import Notifications from './Notifications';
import gql from 'graphql-tag';
import {Query} from '@apollo/react-components';
import Loader from '../../components/Loader';
import {queryViewer} from '../../config/models';

const GET_All_MYCAMPAIGNS = gql`
  query notifications($userid: ID!) {
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
        }
      }
    }
  }
`;

export default class NotificationsContainer extends Component {
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
            if (data) {
              return (
                <Notifications
                  notifications={data.user.campaigns}
                  user={this.state.user.id}
                />
              );
            }
          }}
        </Query>
      )
    );
  }
}
