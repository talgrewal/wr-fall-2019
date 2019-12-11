import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native-gesture-handler';
import styles from './styles';
import deadTrees from '../../assets/Imagery/deadtrees.png';
import icebergMelt from '../../assets/Imagery/icebergmelt.png';
import iceCream from '../../assets/Imagery/icecream.png';

const Campaigns = ({navigation, campaignData}) => {
  console.log('Data:' + JSON.stringify(campaignData));
  console.log(campaignData[0]);
  console.log(campaignData[0].title);
  console.log('Testing');

  let campaignItems = [];
  for (let i = 0; i < campaignData.length; i++) {
    campaignItems.push(
      <TouchableOpacity key={i}>
        <View>
          <Image
            style={{width: 150, height: 150}}
            source={{uri: campaignData[0].image}}
          />
          <Text>{campaignData[i].title}</Text>
        </View>
      </TouchableOpacity>,
    );
  }

  return (
    <SafeAreaView>
      {/* Campaign Header Start */}
      <View style={{flexGrow: 1, justifyContent: 'space-around'}}>
        <View style={styles.campaignsHeader}>
          <Image
            style={styles.categoryImage}
            source={require('../../assets/category/Charity.png')}
          />

          <Image
            style={styles.xxxIcon}
            source={require('../../assets/artwork/xgroup.png')}
          />
        </View>
        {/* Campaign Header End */}

        <ScrollView horizontal={true} sc>
          <View style={styles.videoSection}>
            <Image style={styles.categoryVideo} source={iceCream} />

            <Image style={styles.categoryVideo} source={icebergMelt} />

            <Image style={styles.categoryVideo} source={iceCream} />
          </View>
        </ScrollView>
        <View style={styles.border} />

        <FlatList
          style={styles.campaignSingle}
          data={campaignData}
          numColumns={2}
          // height="100%"
          renderItem={({item}) => (
            <TouchableOpacity>
              <Image
                style={styles.campaignSingleMainImage}
                source={{uri: item.image}}
              />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.email}
        />
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(Campaigns);
