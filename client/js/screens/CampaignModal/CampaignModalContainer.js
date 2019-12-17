import React, {Component} from 'react';
import CampaignModal from './CampaignModal';
import {queryViewer} from '../../config/models';

class CampaignModalContainer extends Component {
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
        <CampaignModal
          user={this.state.user}
          campaignData={this.props.navigation.state.params}
        />
      )
    );
  }
}

export default CampaignModalContainer;
