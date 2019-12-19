import React, {Component} from 'react';
import Event from './Event';
import {queryViewer} from '../../config/models';
import gql from 'graphql-tag';
import {Query} from '@apollo/react-components';
import {Text} from 'react-native';
import Loader from '../../components/Loader';

export const GET_COMMENTS = gql`
  query($eventid: ID!) {
    event(where: {id: $eventid}) {
      comments {
        username
        comment
        createdAt
      }
    }
  }
`;

export default class EventContainer extends Component {
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
    const id = this.props.navigation.state.params.event.id;
    return (
      this.state.user && (
        <Query
          query={GET_COMMENTS}
          variables={{eventid: id}}
          fetchPolicy="network-only">
          {({loading, error, data, refetch}) => {
            if (error) return <Text>error</Text>;
            if (loading) return <Loader />;
            return (
              <Event
                comments={data.event.comments.reverse()}
                user={this.state.user}
                refetch={refetch}
              />
            );
          }}
        </Query>
      )
    );
  }
}
