import React from 'react';
import {Text, View, ScrollView, Image, Linking} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../Campaign/styles';
import PropTypes from 'prop-types';
import BackButton from '../../assets/miscicons/XIcon2.png';
import MainSubscribeButton from '../../components/MainSubscribeButton';
import MainUnsubscribeButton from '../../components/MainUnsubscribeButton';

const CampaignModal = ({
  navigation,
  campaignData,
  user,
  subscriptionCampaignData,
}) => {
  console.log(subscriptionCampaignData);
  return (
    <ScrollView
      style={styles.speakerContainer}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.pageContainer}>
        <View style={styles.outsideMain}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={styles.pageTitle}>
              {campaignData.campaignData.campaign.title}
            </Text>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image style={styles.backButtonX} source={BackButton} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Start of Main Subscribe button */}

        {campaignData.campaignData.campaign.events.length > 0 ? (
          <MainSubscribeButton
            userId={user.id}
            CampaignId={campaignData.campaignData.campaign.id}
            subscribeMessage={false}
            parentScreen={'mainCampaign'}
          />
        ) : (
          <MainUnsubscribeButton
            CampaignId={campaignData.campaignData.campaign.id}
            userId={user.id}
          />
        )}

        {/* {campaigns ? (
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
      )} */}

        {/* Start of Main Subscribe button */}
        {/* Start of Campaign Info */}
        <View style={styles.campaignDetailsCampaignModal}>
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
    </ScrollView>
  );
};

export default withNavigation(CampaignModal);
