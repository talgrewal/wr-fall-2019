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
import ListEvent from '../../components/ListEvent';

const Campaign = ({navigation, user, campaigns}) => {
  const events = navigation.state.params.campaign.events.map((event, index) => (
    <ListEvent key={index} event={event} navigation={navigation} />
  ));
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
      {/* End of Campaign Info */}

      {/* Start of Campaign Info */}
      <View style={styles.campaignDescription}>
        <Text style={styles.campaignDescriptionText} numberOfLines={5}>
          {navigation.state.params.campaign.description}
        </Text>
      </View>

      {campaigns ? (
        campaigns.find(selectedCampaign => selectedCampaign.id === user.id) ? (
          <MainUnsubscribeButton
            CampaignId={navigation.state.params.campaign.id}
            userId={user.id}
            subscribeMessage={false}
            parentScreen={'mainCampaign'}
          />
        ) : (
          <MainSubscribeButton
            userId={user.id}
            CampaignId={navigation.state.params.campaign.id}
            subscribeMessage={true}
            parentScreen={'mainCampaign'}
          />
        )
      ) : navigation.state.params.campaign.subscribers.find(
          selectedCampaign => selectedCampaign.id === user.id,
        ) ? (
        <MainUnsubscribeButton
          CampaignId={navigation.state.params.campaign.id}
          userId={user.id}
          subscribeMessage={false}
          parentScreen={'mainCampaign'}
        />
      ) : (
        <MainSubscribeButton
          userId={user.id}
          CampaignId={navigation.state.params.campaign.id}
          subscribeMessage={true}
          parentScreen={'mainCampaign'}
        />
      )}

      <View>
        <Text style={styles.campaignCategoryTitle}>Events</Text>
        {navigation.state.params.campaign.events.length > 0 ? (
          <>{events}</>
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
