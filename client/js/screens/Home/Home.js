import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {deleteViewer} from '../../config/modals';
import {withNavigation} from 'react-navigation';

const Home = ({navigation}) => {
  return (
    <>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={async () => {
          await deleteViewer();
          navigation.navigate('Login');
          console.log('Sign out');
        }}>
        <Text>Sign out!</Text>
      </TouchableOpacity>
    </>
  );
};

export default withNavigation(Home);
