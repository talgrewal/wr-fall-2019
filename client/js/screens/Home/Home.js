import React from 'react';
import {Text, View} from 'react-native';

import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>This is the Home Screen</Text>
      <Text>Click on the links below:</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Campaigns', {campaignName: 'Enviro'})
        }>
        <Text>Go to the Enviro Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Campaigns', {campaignName: 'Social'})
        }>
        <Text>Go to the Social Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Campaigns', {campaignName: 'Politico'})
        }>
        <Text>Go to the Politico Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Campaigns', {campaignName: 'Charity'})
        }>
        <Text>Go to the Charity Page</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Campaign')}>
        <Text>Go to the Campaign Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Home);
