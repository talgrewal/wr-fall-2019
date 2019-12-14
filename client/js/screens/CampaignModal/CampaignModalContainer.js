import React, {Component} from 'react';
import CampaignModal from './CampaignModal';
import {UserContext} from '../../context/UserProvider';

class CampaignModalContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user}) => (
          <CampaignModal
            user={user}
            campaignData={this.props.navigation.state.params}
          />
        )}
      </UserContext.Consumer>
    );
  }
}

export default CampaignModalContainer;
