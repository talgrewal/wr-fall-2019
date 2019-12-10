import React from 'react';
import {Text, View, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
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
    <ScrollView>
      {/* Campaign Header Start */}
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

      <View>
        <View>
          <Image style={styles.categoryVideo} source={deadTrees} />
        </View>
        <View>
          <Image style={styles.categoryVideo} source={icebergMelt} />
        </View>
        <View>
          <Image style={styles.categoryVideo} source={iceCream} />
        </View>
      </View>

      <View>
        <View>{campaignItems}</View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Campaigns);
