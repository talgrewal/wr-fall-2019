import React from 'react';
import AccountLoginForm from '../../components/AccountLoginForm';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LogoImage from '../../assets/headingelement/worldrevolutionblack.png';
import styles from '../Signup/styles';
import {withNavigation} from 'react-navigation';

const Login = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Image style={styles.signinHeroImage} source={LogoImage} />
      <AccountLoginForm />
      <View style={styles.loginInfo}>
        <View style={styles.accountSignup}>
          <Text style={styles.blackFont}>Don't have an Account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={styles.redFont}>Sign up Here</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.blackFont}>Not Ready yet? No Worries</Text>
        </View>
      </View>
    </View>
  );
};

export default withNavigation(Login);
