import React from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {withNavigation} from 'react-navigation';

import styles from './styles';
import MainSubscribeButton from '../../components/MainSubscribeButton';
import MrMoneyImage from '../../assets/artwork/mrmoney.png';

const Campaign = ({navigation, campaign}) => {
  // console.log(navigation.state.params);
  // console.log(navigation.state.params.campaign.events[0].title);
  console.log(navigation.state.params.campaign);
  // console.log(navigation.state.params.campaign.description);
  // console.log(navigation.state.params);
  // console.log(navigation.state);
  // console.log(navigation);
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

      <MainSubscribeButton
        CampaignId={navigation.state.params.campaign.events.id}
      />

      {/* Start of flat list */}
      <View>
        <Text>Events</Text>
        {navigation.state.params.campaign.events.length > 0 ? (
          <FlatList
            style={styles.campaignSingle}
            data={navigation.state.params.campaign.events}
            renderItem={({item}) => (
              <View>
                <Image
                  style={{width: 66, height: 58}}
                  source={{uri: item.image}}
                />

                <Text numberOfLines={1}>{item.title}</Text>
                <Text numberOfLines={2}>{item.location}</Text>
                <Text numberOfLines={2}>{item.createdAt}</Text>
              </View>
            )}
            keyExtractor={(item, index) => 'index' + index.toString()}
          />
        ) : (
          <View>
            <Text>
              No events at this time. Please subscribe to get notified for
              future events.
            </Text>
            <Image source={MrMoneyImage} />
          </View>
        )}
      </View>
      {/* end of flat list */}
    </View>
  );
};

export default withNavigation(Campaign);
