import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const Home = ({navigation}) => {
  return (
    <>
      <Text>Home Screen</Text>
    </>
  );
};

export default withNavigation(Home);
