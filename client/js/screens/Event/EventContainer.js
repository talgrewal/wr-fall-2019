import React, {Component} from 'react';
import Event from './Event';

export default class EventContainer extends Component {
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
      <Event
        title={title}
        description={description}
        location={location}
        startDate={startDate}
        endDate={endDate}
        comments={comments}
      />
    );
  }
}
