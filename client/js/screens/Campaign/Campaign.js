import React from 'react';
import {View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Campaign = ({navigation}) => {
  return (
    <View>
      <Text>This is the campaign Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Campaign);
