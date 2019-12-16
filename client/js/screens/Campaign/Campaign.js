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

const Campaign = ({navigation, user}) => {
  const campaign = navigation.state.params.campaign;
  const {id, title, category, subscribers, events, description} = campaign;
  return (
    <ScrollView style={styles.campaignContainer}>
      <Text style={styles.pageTitle}>{title}</Text>
      {/* Start of Campaign Info */}
      <View style={styles.campaignDetails}>
        <View>
          <Text style={styles.campaignCategoryTitle}>Category</Text>
          <Text style={styles.campaignCategoryType}>{category}</Text>
        </View>
        <View style={styles.campaignSubInfo}>
          <View>
            <Text style={styles.subscriberNumber}>{subscribers.length}</Text>
            <Text style={styles.subscriberName}>Subscribers</Text>
          </View>
          <View>
            <Text style={styles.subscriberNumber}>{events.length}</Text>
            <Text style={styles.subscriberName}>Events</Text>
          </View>
        </View>
      </View>
      <View style={styles.campaignDescription}>
        <Text style={styles.campaignDescriptionText} numberOfLines={5}>
          {description}
        </Text>
        <TouchableOpacity>
          <Text style={styles.campaignRedText}>More</Text>
        </TouchableOpacity>
      </View>
      {events.length > 0 ? (
        <MainSubscribeButton userId={user.id} CampaignId={id} />
      ) : (
        <MainUnsubscribeButton CampaignId={id} userId={user.id} />
      )}

      {/* Start of flat list */}
      <View>
        <Text style={styles.campaignCategoryTitle}>Events</Text>
        {events.length > 0 ? (
          <FlatList
            style={styles.eventSingle}
            data={events}
            renderItem={({item}) => <ListEvent event={item} />}
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
