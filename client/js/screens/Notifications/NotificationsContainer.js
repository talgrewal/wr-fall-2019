import React, {Component} from 'react';
import Notifications from './Notifications';
import gql from 'graphql-tag';
import {Query} from '@apollo/react-components';
import Loader from '../../components/Loader';
import {queryViewer} from '../../config/models';
import moment, {now} from 'moment';

let notificationListItem = [];

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
          createdAt
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
          {({loading, error, data, refetch}) => {
            if (loading) {
              return <Loader />;
            }
            if (error) {
              return <Text>{error.message}</Text>;
            }
            if (data) {
              const campaigns = data.user.campaigns;
              const eventsData = campaigns.map(campaign => campaign.events);

              const events = campaigns.map(campaign => {
                return campaign.events.map(event => {
                  event.campaignTitle = campaign.title;

                  return event;
                });
              });
              console.log('newCampaigns', events.flat());

              const sortedArray = events
                .flat()
                .sort((a, b) => moment(b.createdAt).diff(moment(a.createdAt)));
              const timeNow = moment();
              const modifiedEvents = sortedArray.filter(event => {
                let eventCreatedAt = moment(event.createdAt);
                const diff = timeNow.diff(eventCreatedAt, 'minutes');
                if (diff <= 60) {
                  return true;
                } else {
                  return false;
                }
              });

              return (
                <Notifications
                  user={this.state.user.id}
                  refetch={refetch}
                  campaign={campaigns}
                  modifiedEvents={modifiedEvents}
                />
              );
            }
          }}
        </Query>
      )
    );
  }
}
