import React from 'react';
import {Text, View} from 'react-native';

import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Campaigns')}>
        <Text>Go to the Campaigns Page</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Campaign')}>
        <Text>Go to the Campaign Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Home);
