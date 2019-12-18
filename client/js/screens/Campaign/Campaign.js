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

const Campaign = ({navigation, user, campaigns}) => {
  // const isSubscribed = campaigns.find(campaign => campaign.id === userId);
  console.log(user.id);
  console.log(user.name);
  // console.log(campaigns);
  // console.log(campaigns);
  console.log('campaign coming here');
  console.log(navigation.state.params.campaign);
  console.log(navigation.state.params.campaign.subscribers);

  // if (campaigns) {
  //   console.log(campaigns.length);
  // } else {
  //   console.log('not run yet');
  // }
  // console.log(navigation.state.params.campaign.id);

  // campaign ? (isSubscribed) : <console.log('user subscribed')

  // {campaign  ? (
  //   isSubscribedSubData ? console.log('subscribed') : console.log('not subscribed')
  // ) : (isSubscribedQueryData ? console.log('subscribed') : console.log('not subscribed') )}

  // if (campaigns) {
  //   console.log('alpha', campaigns[0].id);
  // } else {
  //   null;
  // }

  // if (!campaigns) {
  //   const currentSubCampaign = campaigns.find(
  //     selectedCampaign => selectedCampaign.id === user.id,
  //   );
  //   console.log('cur cur', currentSubCampaign);
  // } else {
  //   console.log('he');
  // }
  // console.log(currentCampaign.id);
  // console.log(currentCampaign.subscribers.length);

  // if (campaigns) {
  //   const isSubscribed = campaigns.find(
  //     subscriber => subscriber.id === user.id,
  //   );
  //   console.log('User subed');
  // } else {
  //   console.log('User not subed');
  // }

  return (
    <ScrollView style={styles.campaignContainer}>
      <Text style={styles.pageTitle}>
        {navigation.state.params.campaign.title}
      </Text>
      <View style={styles.campaignDetails}>
        <View>
          <Text style={styles.campaignCategoryTitle}>Category</Text>
          <Text style={styles.campaignCategoryType}>
            {navigation.state.params.campaign.category}
          </Text>
        </View>
        <View style={styles.campaignSubInfo}>
          <View>
            {campaigns ? (
              <Text style={styles.subscriberNumber}>{campaigns.length}</Text>
            ) : (
              <Text style={styles.subscriberNumber}>
                {navigation.state.params.campaign.subscribers.length}
              </Text>
            )}

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
      <View style={styles.campaignDescription}>
        <Text style={styles.campaignDescriptionText} numberOfLines={5}>
          {navigation.state.params.campaign.description}
        </Text>
        <TouchableOpacity>
          <Text style={styles.campaignRedText}>More</Text>
        </TouchableOpacity>
      </View>

      {campaigns ? (
        campaigns.find(selectedCampaign => selectedCampaign.id === user.id) ? (
          <MainUnsubscribeButton
            CampaignId={navigation.state.params.campaign.id}
            userId={user.id}
            subscribeMessage={false}
          />
        ) : (
          <MainSubscribeButton
            userId={user.id}
            CampaignId={navigation.state.params.campaign.id}
            subscribeMessage={true}
          />
        )
      ) : navigation.state.params.campaign.subscribers.find(
          selectedCampaign => selectedCampaign.id === user.id,
        ) ? (
        <MainUnsubscribeButton
          CampaignId={navigation.state.params.campaign.id}
          userId={user.id}
          subscribeMessage={false}
        />
      ) : (
        <MainSubscribeButton
          userId={user.id}
          CampaignId={navigation.state.params.campaign.id}
          subscribeMessage={true}
        />
      )}

      {/* {campaigns ? (
        <MainUnsubscribeButton
          CampaignId={navigation.state.params.campaign.id}
          userId={user.id}
          subscribeMessage={false}
        />
      ) : (
        <MainSubscribeButton
          userId={user.id}
          CampaignId={navigation.state.params.campaign.id}
          subscribeMessage={true}
        />
      )} */}
      <View>
        <Text style={styles.campaignCategoryTitle}>Events</Text>
        {navigation.state.params.campaign.events.length > 0 ? (
          <FlatList
            style={styles.eventSingle}
            data={navigation.state.params.campaign.events}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Event', {event: item})}>
                <View style={styles.eventContainer}>
                  <View style={styles.eventImageBox}>
                    <Image
                      style={styles.eventImage}
                      source={{uri: item.image}}
                    />
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
              </TouchableOpacity>
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
    </ScrollView>
  );
};

export default withNavigation(Campaign);
