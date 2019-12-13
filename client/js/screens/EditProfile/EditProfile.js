import React from 'react';
import EditProfileForm from '../../components/EditProfileForm';
import {View, Text} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const EditProfile = ({navigation}) => {
  return (
    <>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.pageContainer}>
        <EditProfileForm />
      </View>
    </>
  );
};

export default withNavigation(EditProfile);
