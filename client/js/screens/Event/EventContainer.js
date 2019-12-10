import React, {Component} from 'react';

import Event from './Event';

export default class EventContainer extends Component {
  render() {
    const {title, description, location, time, date} = this.props;
    return (
      <Event
        title={title}
        description={description}
        location={location}
        time={time}
        date={date}
      />
    );
  }
}
