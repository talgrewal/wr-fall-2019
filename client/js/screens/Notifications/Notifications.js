import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import Notification from '../../components/Notification';
import styles from './styles';
import spaceTexture from '../../assets/Textures/DarkSpace.png';

const Notifications = ({notifications}) => {
  console.log(notifications);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <ImageBackground
        style={styles.panel}
        imageStyle={styles.panel}
        source={spaceTexture}>
        <Notification />
      </ImageBackground>
    </View>
  );
};

export default Notifications;
