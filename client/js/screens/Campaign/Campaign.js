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

const Campaign = ({navigation, user}) => {
  console.log('Params:', navigation.state.params);
  console.log('Params:', navigation.state);

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
      {navigation.state.params.campaign.events.length > 0 ? (
        <MainSubscribeButton
          userId={user.id}
          CampaignId={navigation.state.params.campaign.id}
        />
      ) : (
        <MainUnsubscribeButton
          CampaignId={navigation.state.params.campaign.id}
          userId={user.id}
        />
      )}

      {/* Start of flat list */}
      <View>
        <Text style={styles.campaignCategoryTitle}>Events</Text>
        {navigation.state.params.campaign.events.length > 0 ? (
          <FlatList
            style={styles.eventSingle}
            data={navigation.state.params.campaign.events}
            renderItem={({item}) => (
              <View style={styles.eventContainer}>
                <View style={styles.eventImageBox}>
                  <Image style={styles.eventImage} source={{uri: item.image}} />
                </View>

                <View style={styles.eventInfoBox}>
                  <Text style={styles.eventInfoBoxTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.eventInfoBoxLocation} numberOfLines={2}>
                    {item.location}
                  </Text>
                </View>
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
