import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './styles';
import spaceTexture from '../../assets/Textures/DarkSpace.png';
import SmallUnsubscribeButton from '../../components/SmallUnsubscribeButton';
import ActiveButton from '../../assets/buttons/ButtonSPace.png';
import {withNavigation} from 'react-navigation';

const MyCampaigns = ({myCampaigns, user, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>My Campaigns </Text>
      {myCampaigns && myCampaigns.length > 0 ? (
        <ImageBackground
          style={styles.background}
          imageStyle={styles.panel}
          source={spaceTexture}>
          <FlatList
            data={myCampaigns}
            renderItem={({item}) => (
              <View style={styles.item}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                  onPress={() => {
                    navigation.navigate('Campaign', {
                      campaign: item,
                    });
                  }}>
                  {/* View for text flexDirection = column (auto)*/}
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.category}>{item.category}</Text>
                  </View>
                  <SmallUnsubscribeButton CampaignId={item.id} userid={user} />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </ImageBackground>
      ) : (
        <View>
          <View style={styles.page}>
            <Image
              style={styles.image}
              source={require('../../assets/artwork/blackspot.png')}
            />
          </View>
          <Text style={styles.pageTitle}>
            You are not following any campaigns yet
          </Text>

          <Text style={styles.noCampaign}>
            Get the wheel rolling and ignite the fire by following campaigns and
            adding events to your stuff. Keep your calendar updated and never
            miss out to be a part of the movement.
          </Text>
          <View style={styles.buttonHolder}>
            <TouchableOpacity style={styles.button}>
              <ImageBackground source={ActiveButton} style={styles.buttonImage}>
                <Text style={styles.buttonText}>Browse Campaigns</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* Guest Screen */}
      {!user ? (
        <View>
          <View style={styles.page}>
            <Image
              style={styles.image}
              source={require('../../assets/artwork/Revolution.png')}
            />
          </View>
          <Text style={styles.pageTitle}>
            Sign in to keep track of campaigns and events
          </Text>
          <Text style={styles.noCampaign}>
            Keep your calendar updated and never miss out to be a part of the
            movement!
          </Text>
          <View style={styles.buttonHolder}>
            <TouchableOpacity style={styles.button}>
              <ImageBackground source={ActiveButton} style={styles.buttonImage}>
                <Text style={styles.buttonText}>Sign In</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <Text style={{textAlign: 'center'}}>Or</Text>
          <View style={styles.buttonHolder}>
            <TouchableOpacity style={styles.button}>
              <ImageBackground source={ActiveButton} style={styles.buttonImage}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default withNavigation(MyCampaigns);
