import React, {Component, createContext} from 'react';
import Loader from '../components/Loader';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {queryViewer} from '../config/modals';
const UserContext = createContext();

const USER_QUERY = gql`
  query user($userId: ID!) {
    user(where: {id: $userId}) {
      id
      email
      name
    }
  }
`;

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  getAsyncUser = async () => {
    try {
      const asyncUser = await queryViewer().then(asyncUser);
      console.log('ASYNC USER: ', asyncUser);
      return asyncUser;
    } catch (e) {
      console.log(e);
    }
  };

  getLoggedUser = async () => {
    console.log(getASyncUser());
    return (
      <Query query={USER_QUERY} variables={{userId: getAsyncUser().Id}}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <>{console.log(error)}</>;
          return (
            <UserContext.Provider value={{user: data}}>
              {children}
            </UserContext.Provider>
          );
        }}
      </Query>
    );
  };

  render() {
    return this.getLoggedUser();
  }
}

export {UserContext};
export default UserProvider;
