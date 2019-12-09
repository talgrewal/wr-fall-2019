import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Home = props => {
  return (
    <>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={console.log('Sign out under construction!')}>
        <Text>Sign out!</Text>
        <Text>Sign out!</Text>
      </TouchableOpacity>
    </>
  );
};

export default Home;
