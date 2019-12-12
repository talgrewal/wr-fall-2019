import React, {createContext} from 'react';
import Loader from '../components/Loader';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const UserContext = createContext();

const USER_QUERY = gql`
  {
    users {
      name
    }
  }
`;

const UserProvider = ({children}) => {
  return (
    <Query query={USER_QUERY}>
      {({loading, error, data}) => {
        if (loading) return <Loader />;
        if (error)
          return (
            <>
              {console.log(error)}
              {console.log('Error^^^^')}
            </>
          );
        const user = data && data.user ? data.user : null;
        return (
          <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
        );
      }}
    </Query>
  );
};
export {UserContext};
export default UserProvider;
