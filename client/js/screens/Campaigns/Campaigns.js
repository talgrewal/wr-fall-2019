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
    campaignItems.push(<Text>{campaignData[i].title}</Text>);
  }

  return (
    <ScrollView>
      <View>
        <Image
          style={styles.categoryImage}
          source={require('../../assets/category/Charity.png')}
        />
      </View>

      <View>
        <Image
          style={styles.xxxIcon}
          source={require('../../assets/artwork/xgroup.png')}
        />
      </View>

      <View>
        <View>
          <Image style={styles.categoryImage} source={deadTrees} />
        </View>
        <View>
          <Image style={styles.categoryImage} source={icebergMelt} />
        </View>
        <View>
          <Image style={styles.categoryImage} source={iceCream} />
        </View>
      </View>

      <View>
        <View>{campaignItems}</View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Campaigns);
