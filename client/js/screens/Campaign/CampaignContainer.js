import React, {Component} from 'react';
import Campaign from './Campaign';
import {queryViewer} from '../../config/modals';
import gql from 'graphql-tag';
import {withNavigation} from 'react-navigation';
import {Mutation, Query} from '@apollo/react-components';

const QUERY_USER = gql`
  query getUser($userId: ID!) {
    user(where: {id: $userId}) {
      id
      email
      name
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
    const user = JSON.parse(await queryViewer());
    this.setState({user});
    // console.log(this.state.user);
  };

  render() {
    return <Campaign user={this.state.user} />;
  }
}

export default withNavigation(CampaignContainer);
