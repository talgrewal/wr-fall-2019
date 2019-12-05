import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';

export default new ApolloClient({
  uri: 'https://us1.prisma.sh/public-flintwanderer-148/server/dev',
});

export const SIGNUP_MUTATION = gql`
  mutation CreateUser($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
