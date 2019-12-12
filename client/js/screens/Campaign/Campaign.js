import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';

import styles from './styles';
import MainSubscribeButton from '../../components/MainSubscribeButton';
import MainUnsubscribeButton from '../../components/MainUnsubscribeButton';
import MrMoneyImage from '../../assets/artwork/mrmoney.png';

const Campaign = ({navigation, campaign}) => {
  console.log(navigation.state.params);
  // console.log(navigation.state.params.campaign.events[0].title);
  console.log(navigation.state.params.campaign);
  console.log(navigation.state.params.campaign.id);
  console.log(navigation.state.params);
  console.log(navigation.state);
  console.log(navigation);
  console.log(navigation.state.params.campaign.description);
  console.log(navigation.state.params.campaign.description);
  return (
    <ScrollView style={styles.campaignContainer}>
      {/* Start of Title */}

      <Text style={styles.pageTitle}>
        {navigation.state.params.campaign.title}
      </Text>

      {/* End of Title */}

      {/* Start of Campaign Info */}
      <View style={styles.campaignDetails}>
        <View>
          <Text style={styles.campaignCategoryTitle}>Category</Text>
          <Text style={styles.campaignCategoryType}>
            {navigation.state.params.campaign.category}
          </Text>
        </View>
        <View style={styles.campaignSubInfo}>
          <View>
            <Text style={styles.subscriberNumber}>
              {navigation.state.params.campaign.subscribers.length}
            </Text>
            <Text style={styles.subscriberName}>Subscribers</Text>
          </View>
          <View>
            <Text style={styles.subscriberNumber}>
              {navigation.state.params.campaign.events.length}
            </Text>
            <Text style={styles.subscriberName}>Events</Text>
          </View>
        </View>
      </View>
      {/* Start of Campaign Info */}

      <View style={styles.campaignDescription}>
        <Text style={styles.campaignDescriptionText} numberOfLines={5}>
          {navigation.state.params.campaign.description}
        </Text>
        <TouchableOpacity>
          <Text style={styles.campaignRedText}>More</Text>
        </TouchableOpacity>
      </View>

      <MainSubscribeButton CampaignId={navigation.state.params.campaign.id} />
      <MainUnsubscribeButton CampaignId={navigation.state.params.campaign.id} />

      {/* Start of flat list */}
      <View>
        <Text style={styles.campaignCategoryTitle}>Events</Text>
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
            <Text style={styles.noEventsDetails}>
              No events at this time. Please subscribe to get notified for
              future events.
            </Text>
            <Image style={styles.noEventsImage} source={MrMoneyImage} />
          </View>
        )}
      </View>
      {/* end of flat list */}
    </ScrollView>
  );
};

export default withNavigation(Campaign);
