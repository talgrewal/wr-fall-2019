import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const Contact = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <View style={styles.headerView}>
        <Image
          style={styles.imageOne}
          source={require('../../assets/signinicons/EmailIcon.png')}
        />
        <Text style={styles.bodyText}>info@adbusters.org</Text>
      </View>
      <View style={styles.headerView}>
        <Image
          style={styles.imageTwo}
          source={require('../../assets/miscicons/phoneicon.png')}
        />
        <Text style={styles.bodyTextTwo}>+1 800-663-1243</Text>
      </View>
      <View style={styles.headerView}>
        <Image
          style={styles.imageThree}
          source={require('../../assets/miscicons/homeaddress.png')}
        />
        <Text style={styles.bodyText}>00 West 7th Av. Vancouver, BC</Text>
      </View>
    </View>
  );
};

export default Contact;
