import React from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import styles from './styles';
import MainSubscribeButton from '../../components/MainSubscribeButton';

const Campaign = ({navigation, campaign}) => {
  console.log(navigation.getParam('campaign'));
  console.log(navigation.state.params.campaign);
  console.log(navigation.state.params.campaign.title);
  console.log(navigation.state.params.campaign.description);
  console.log(navigation.state.params);
  console.log(navigation.state);
  console.log(navigation);
  return (
    <View>
      {/* Start of Title */}

      <Text style={styles.pageTitle}>
        {navigation.state.params.campaign.title}
      </Text>

      {/* End of Title */}

      {/* Start of Campaign Info */}
      <View>
        <View>
          <Text>Category</Text>
          <Text>{navigation.state.params.campaign.category}</Text>
        </View>
        <View>
          <Text>{navigation.state.params.campaign.subscribers.length}</Text>
          <Text>Subscribers</Text>
        </View>
        <View>
          <Text>{navigation.state.params.campaign.events.length}</Text>
          <Text>Events</Text>
        </View>
      </View>
      {/* Start of Campaign Info */}

      <View>
        <Text numberOfLines={5}>
          {navigation.state.params.campaign.description}
        </Text>
        <TouchableOpacity>
          <Text>More</Text>
        </TouchableOpacity>
      </View>

      <MainSubscribeButton />

      {/* Start of flat list */}
      <FlatList
        style={styles.campaignSingle}
        data={campaign}
        numColumns={1}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Event', {
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
      {/* end of flat list */}
    </View>
  );
};

export default withNavigation(Campaign);
