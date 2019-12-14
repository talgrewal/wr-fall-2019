import React from 'react';
import {Text, View, ScrollView, Image, Linking} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../Campaign/styles';
import {colors} from '../../config/styles';
import SafeAreaView from 'react-native-safe-area-view';
import PropTypes from 'prop-types';
import BackButton from '../../assets/miscicons/xicon.png';
import MainSubscribeButton from '../../components/MainSubscribeButton';
import MainUnsubscribeButton from '../../components/MainUnsubscribeButton';

const CampaignModal = ({navigation, campaignData, user}) => {
  console.log(user);
  return (
    <SafeAreaView style={styles.speakerContainer}>
      <View style={styles.pageContainer}>
        <View style={styles.outsideMain}>
          <View style={styles.titleContainer}>
            <Text style={styles.pageTitle}>
              {campaignData.campaignData.campaign.title}
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image style={styles.backButtonX} source={BackButton} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Start of Main Subscribe button */}

        {campaignData.campaignData.campaign.events.length > 0 ? (
          <MainSubscribeButton
            userId={user.id}
            CampaignId={campaignData.campaignData.campaign.id}
          />
        ) : (
          <MainUnsubscribeButton
            CampaignId={campaignData.campaignData.campaign.id}
            userId={user.id}
          />
        )}

        {/* Start of Main Subscribe button */}
        {/* Start of Campaign Info */}
        <View style={styles.campaignDetails}>
          <View>
            <Text style={styles.campaignCategoryTitle}>Category</Text>
            <Text style={styles.campaignCategoryType}>
              {campaignData.campaignData.campaign.category}
            </Text>
          </View>
          <View style={styles.campaignSubInfo}>
            <View>
              <Text style={styles.subscriberNumber}>
                {campaignData.campaignData.campaign.subscribers.length}
              </Text>
              <Text style={styles.subscriberName}>Subscribers</Text>
            </View>
            <View>
              <Text style={styles.subscriberNumber}>
                {campaignData.campaignData.campaign.events.length}
              </Text>
              <Text style={styles.subscriberName}>Events</Text>
            </View>
          </View>
        </View>
        {/* End of Campaign Info */}

        {/* Campaign Image Begin */}
        <View>
          <Image
            style={styles.campaignImage}
            source={{uri: campaignData.campaignData.campaign.image}}
          />

          <Text style={styles.campaignDescriptionText} numberOfLines={5}>
            {campaignData.campaignData.campaign.description}
          </Text>
        </View>
        {/* Campaign Image end */}
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(CampaignModal);
