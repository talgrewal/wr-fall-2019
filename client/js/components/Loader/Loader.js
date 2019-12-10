import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';
import {Image, Text} from 'react-native';
import LoadingAnimation from '../../assets/animations/tenor.gif';

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <Image style={styles.loader} source={LoadingAnimation} />
    </View>
  );
};

export default Loader;
