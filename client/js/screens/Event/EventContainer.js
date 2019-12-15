import React, {Component} from 'react';
import Event from './Event';
import {UserContext} from '../../context/UserProvider';
import {withNavigation} from 'react-navigation';

class EventContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user}) => <Event user={user} />}
      </UserContext.Consumer>
    );
  }
}

export default withNavigation(EventContainer);
