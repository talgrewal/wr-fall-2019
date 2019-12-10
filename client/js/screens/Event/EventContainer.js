import React, {Component} from 'react';

import Event from './Event';

export default class EventContainer extends Component {
  render() {
    const {title, description, address, city, time, date} = this.props;
    return (
      <Event
        title={title}
        description={description}
        address={address}
        time={time}
        date={date}
        city={city}
      />
    );
  }
}
