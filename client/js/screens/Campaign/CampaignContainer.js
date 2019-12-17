import React, {Component} from 'react';
import Campaign from './Campaign';
import {queryViewer} from '../../config/models';

class CampaignContainer extends Component {
  constructor(props) {
    super(props);
    this.setState({user: null});
  }

  componentDidMount() {
    this.getuser();
  }

  getUser = async () => {
    const user = await queryViewer();
    this.setState({user});
  };
  render() {
    return <Campaign user={this.state.user} />;
  }
}

export default CampaignContainer;
