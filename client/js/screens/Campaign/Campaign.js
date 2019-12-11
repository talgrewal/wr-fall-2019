import React from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Campaign = ({navigation}) => {
  console.log(navigation.getParam('campaign'));
  return <Text>Campaign Screen</Text>;
};

export default withNavigation(Campaign);
