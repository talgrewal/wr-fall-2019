import React, {Component} from 'react';
import Campaign from './Campaign';
import {queryViewer} from '../../config/modals';
import gql from 'graphql-tag';
import {withNavigation} from 'react-navigation';
import {UserContext} from '../../context/UserProvider';

class CampaignContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user}) => <Campaign user={user} />}
      </UserContext.Consumer>
    );
  }
}

export default withNavigation(CampaignContainer);
