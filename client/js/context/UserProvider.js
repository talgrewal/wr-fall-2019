import React, {createContext} from 'react';
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

const getCurrentUser = async () => {
  try {
    const currentUser = await queryViewer();
    console.log('CURRENT USER: ', currentUser);
    return currentUser;
  } catch (error) {}
  console.log(error);
};

const UserProvider = ({children}) => {
  return (
    <Query query={USER_QUERY}>
      {user => {
        async ({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <>{console.log(error)}</>;
          try {
            const asyncUser = await getCurrentUser();
            console.log(asyncUser);
            const loggedUser = await user({
              variables: {
                userId: currentUser.id,
              },
            });
          } catch (e) {
            console.log(e);
          }
          return (
            <UserContext.Provider value={{user: data.user}}>
              {children}
            </UserContext.Provider>
          );
        };
      }}
      }
    </Query>
  );
};
export {UserContext};
export default UserProvider;
