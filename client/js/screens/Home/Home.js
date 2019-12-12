import React from 'react';
import {withNavigation} from 'react-navigation';
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

const Home = ({navigation}) => {
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

      <View>
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
