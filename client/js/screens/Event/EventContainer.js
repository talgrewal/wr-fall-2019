import React, {Component} from 'react';
import Event from './Event';
import {UserContext} from '../../context/UserProvider';

export default class EventContainer extends Component {
  render() {
    const {event} = this.props;

    return (
      <UserContext.Consumer>
        {({user}) => <Event event={event} user={user} />}
      </UserContext.Consumer>
    );
  }
}
