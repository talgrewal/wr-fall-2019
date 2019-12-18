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

const Notifications = ({notifications, user, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <ImageBackground
        style={styles.background}
        imageStyle={styles.panel}
        source={spaceTexture}>
        <FlatList
          data={notifications}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                  navigation.navigate('Campaign', {
                    campaign: item,
                  });
                }}>
                {item.events.map((notification, index) => {
                  return (
                    <View key={index} style={styles.item}>
                      <Text style={styles.notificationDot}>{'\u2022'}</Text>
                      <Text style={styles.text}>
                        {notification.title} was added to {item.title}
                      </Text>
                    </View>
                  );
                })}
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
