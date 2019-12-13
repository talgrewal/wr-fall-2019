import React, {Component} from 'react';
import Event from './Event';
import {UserContext} from '../../context/UserProvider';

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
      <UserContext.Consumer>
        {({value}) => {
          <Event
            title={title}
            description={description}
            location={location}
            startDate={startDate}
            endDate={endDate}
            comments={comments}
            user={value}
          />;
        }}
      </UserContext.Consumer>
    );
  }
}
