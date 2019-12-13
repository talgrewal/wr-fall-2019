import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  Linking,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';

import styles from './styles';
import deadTrees from '../../assets/Imagery/deadtrees.png';
import icebergMelt from '../../assets/Imagery/icebergmelt.png';
import iceCream from '../../assets/Imagery/icecream.png';
import imageGradient from '../../assets/buttons/buttonbackground.jpg';
import playButton from '../../assets/buttons/videoplayicon.png';

const Campaigns = ({navigation, campaignData}) => {
  return (
    <SafeAreaView>
      {/* Campaign Header Start */}
      <View style={styles.flexContainer}>
        <View style={styles.campaignsHeader}>
          <Image
            style={styles.categoryImage}
            source={require('../../assets/category/Charity.png')}
          />

          <Image
            style={styles.xGroupIcon}
            source={require('../../assets/artwork/xgroup.png')}
          />
        </View>
        {/* Campaign Header End */}

        <ScrollView horizontal={true}>
          <View style={styles.videoSection}>
            {/* divider */}
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.youtube.com/watch?v=oxhYaiSnlAo');
              }}
              style={styles.touchableContainer}>
              <ImageBackground source={iceCream} style={styles.categoryVideo}>
                <View style={styles.flexContainerStart}>
                  <Image source={playButton} style={styles.videoPreview} />
                </View>
              </ImageBackground>
            </TouchableOpacity>
            {/* End of divider */}
            {/* divider */}
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.youtube.com/watch?v=P3GagfbA2vo');
              }}
              style={styles.touchableContainer}>
              <ImageBackground
                source={icebergMelt}
                style={styles.categoryVideo}>
                <View style={styles.flexContainerStart}>
                  <Image source={playButton} style={styles.videoPreview} />
                </View>
              </ImageBackground>
            </TouchableOpacity>
            {/* End of divider */}
            {/* divider */}
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.youtube.com/watch?v=KAJsdgTPJpU');
              }}
              style={styles.touchableContainer}>
              <ImageBackground source={iceCream} style={styles.categoryVideo}>
                <View style={styles.flexContainerStart}>
                  <Image source={playButton} style={styles.videoPreview} />
                </View>
              </ImageBackground>
            </TouchableOpacity>
            {/* End of divider */}
          </View>
        </ScrollView>
        <View style={styles.border} />

        <FlatList
          style={styles.campaignSingle}
          data={campaignData}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Campaign', {
                  campaign: item,
                })
              }
              style={styles.touchableContainer}>
              <Image
                style={styles.campaignSingleMainImage}
                source={{uri: item.image}}
              />
              <View>
                <Image style={styles.gradient} source={imageGradient} />
                <View style={styles.imageAbsolute}>
                  <Text numberOfLines={1} style={styles.campaignSingleText}>
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => 'index' + index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(Campaigns);
