import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

const Home = props => {
  return (
    <ScrollView style={styles.container}>
      <Text>Campaign Categories</Text>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => {
            console.log('pressed');
          }}
          activeOpacity={0.5}
          style={styles.catLogo}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/category/Politico.png')}
          />

          <Image
            style={styles.headerImage}
            source={require('../../assets/Imagery/Wall-Street.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('pressed 1');
          }}
          activeOpacity={0.5}
          style={styles.catLogo}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/category/Enviro.png')}
          />

          <Image
            style={styles.headerImage}
            source={require('../../assets/Imagery/Smokestack.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('pressed 2');
          }}
          activeOpacity={0.5}
          style={styles.catLogo}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/category/Charity.png')}
          />

          <Image
            style={styles.headerImage}
            source={require('../../assets/Imagery/charity.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('pressed 4');
          }}
          activeOpacity={0.5}
          style={styles.catLogo}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/category/Social.png')}
          />

          <Image
            style={styles.headerImage}
            source={require('../../assets/Imagery/revolution.png')}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
