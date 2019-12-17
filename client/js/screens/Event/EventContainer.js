import React, {Component} from 'react';
import Event from './Event';
import {queryViewer} from '../../config/models';

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
    const {
      title,
      description,
      location,
      startDate,
      endDate,
      comments,
    } = this.props;

    return (
      this.state.user && (
        <Event
          title={title}
          description={description}
          location={location}
          startDate={startDate}
          endDate={endDate}
          comments={comments}
          user={this.state.user}
        />
      )
    );
  }
}
