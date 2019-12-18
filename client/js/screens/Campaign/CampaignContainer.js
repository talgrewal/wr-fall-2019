import React, {Component} from 'react';
import Campaign from './Campaign';
import {queryViewer} from '../../config/models';

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
    const user = await queryViewer();
    this.setState({user});
  };
  render() {
    return this.state.user && <Campaign user={this.state.user} />;
  }
}

export default CampaignContainer;
