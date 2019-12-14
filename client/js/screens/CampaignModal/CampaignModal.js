import React from 'react';
import {Text, View, ScrollView, Image, Linking} from 'react-native';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {colors} from '../../config/styles';
import SafeAreaView from 'react-native-safe-area-view';
import PropTypes from 'prop-types';
import BackButton from '../../assets/miscicons/xicon.png';
import MainSubscribeButton from '../../components/MainSubscribeButton';

const CampaignModal = ({navigation, campaignData}) => {
  console.log('hello');
  console.log(campaignData);
  console.log(campaignData.campaignData.campaign.category);
  console.log(campaignData.campaignData.campaign.title);
  console.log(campaignData.campaignData.campaign.description);
  console.log(campaignData.campaignData.campaign.image);
  console.log(campaignData.campaignData.campaign.subscribers);
  return (
    <SafeAreaView style={styles.speakerContainer}>
      <View style={styles.outsideMain}>
        <View style={styles.titleContainer}>
          <Text style={styles.staticTitle}>About the Speaker</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={styles.backButtonX} source={BackButton} />
        </TouchableOpacity>
      </View>
      <MainSubscribeButton />

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

      <View style={styles.mainContainer}>
        {/* <Text style={styles.title}>{speaker.state.params[0].name}</Text> */}
        {/* <Text style={styles.bio}>{speaker.state.params[0].bio}</Text> */}

        <View style={styles.button}></View>
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(CampaignModal);
