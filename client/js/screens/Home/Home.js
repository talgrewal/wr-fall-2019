import React from 'react';
import {Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

const Home = props => {
  return (
    <ScrollView style={styles.container}>
      <Text>Campaign Categories</Text>
      <View style={styles.headerView}>
        <Image
          style={styles.headerImage}
          source={require('../../assets/category/Politico.png')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
