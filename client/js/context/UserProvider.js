import React, {Component} from 'react';
import {createContext} from 'react';
import Loader from '../components/Loader';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {queryViewer} from '../config/modals';
import {Text, View} from 'react-native';
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
      user: null,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    try {
      const user = await queryViewer();
      this.setState({user: user});
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      this.state.user && (
        <Query query={USER_QUERY} variables={{userId: this.state.user.id}}>
          {({loading, error, data}) => {
            if (loading) return <Loader />;
            if (error) return <>{console.log(error)}</>;
            const user = data && data.user ? data.user : null;
            return (
              <UserContext.Provider value={{user: user}}>
                {this.props.children}
              </UserContext.Provider>
            );
          }}
        </Query>
      )
    );
  }
}

export {UserContext};
export default UserProvider;
