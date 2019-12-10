import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';

const Home = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Campaign Categories</Text>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
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
              style={styles.categoryImage}
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
              style={styles.categoryImage}
              source={require('../../assets/Imagery/Smokestack.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
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
              style={styles.categoryImage}
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
              style={styles.categoryImage}
              source={require('../../assets/Imagery/revolution.png')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
