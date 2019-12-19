import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Notification from '../../components/Notification';
import styles from './styles';
import spaceTexture from '../../assets/Textures/DarkSpace.png';
import moment, {now} from 'moment';

const Notifications = ({
  notifications,
  user,
  navigation,
  campaign,
  modifiedEvents,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <ImageBackground
        style={styles.background}
        imageStyle={styles.panel}
        source={spaceTexture}>
        <FlatList
          data={modifiedEvents}
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity style={styles.itemContainer}>
                <View key={index} style={styles.item}>
                  <Text style={styles.notificationDot}>{'\u2022'}</Text>
                  <Text style={styles.text}>
                    {item.title} was added to {item.campaignTitle}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </ImageBackground>
    </View>
  );
};

export default Notifications;
