import React, {Component} from 'react';
import CampaignModal from './CampaignModal';

class CampaignModalContainer extends Component {
  render() {
    // const speaker = this.props.navigation;
    // console.log(this.props.navigation);
    // console.log(this.props.navigation.state);
    // console.log(this.props.navigation.state.params);
    // console.log('hello');
    return <CampaignModal campaignData={this.props.navigation.state.params} />;
  }
}

export default CampaignModalContainer;
