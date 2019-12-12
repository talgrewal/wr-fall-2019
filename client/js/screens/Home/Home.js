import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Carousel from '@rhysforyou/react-native-carousel';
import {withNavigation} from 'react-navigation';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Carousel',
    image: require('../../assets/Imagery/gasmask.png'),
  },
  {
    id: '2',
    title: 'Carousel',
    image: require('../../assets/Imagery/charity.png'),
  },
  {
    id: '3',
    title: 'Carousel',
    image: require('../../assets/Imagery/deadtrees.png'),
  },
];

const Home = props => {
  return (
    <>
      <View style={styles.carouselContainer}>
        <Carousel
          style={styles.carousel}
          data={MOCK_DATA}
          renderItem={info => (
            <View>
              <ImageBackground
                source={info.item.image}
                style={styles.imageBackground}></ImageBackground>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.categoryTitle}>Campaign Categories</Text>
        <ScrollView>
          <View style={styles.page}>
            <TouchableOpacity
              onPress={() => {}}
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
              onPress={() => {}}
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
          <View style={styles.page}>
            <TouchableOpacity
              onPress={() => {}}
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
              onPress={() => {}}
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
    </>
  );
};

export default withNavigation(Home);
