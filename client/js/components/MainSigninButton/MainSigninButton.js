import React, {Component} from 'react';
import styles from './styles';
import {TouchableOpacity, View, Image, Text} from 'react-native';

const MainSigninButton = () => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log('This button works!');
        }}>
        <Text style={styles.speakerText}>This is a..</Text>
        <View style={styles.speakerContainer}>
          <Image
            style={styles.speakerImage}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
          <Text style={styles.speakerName}>Testing</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MainSigninButton;
