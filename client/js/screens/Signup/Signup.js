import React from 'react';
import AccountSignupForm from '../../components/AccountSignupForm';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LogoImage from '../../assets/headingelement/worldrevolutionblack.png';
import styles from './styles';
import {SafeAreaView} from 'react-navigation';
import {withNavigation} from 'react-navigation';

const Signup = props => {
  return (
    <View height="40%" style={styles.pageContainer}>
      <Image style={styles.signinHeroImage} source={LogoImage} />

      <AccountSignupForm />

      <View style={styles.loginInfo}>
        <View style={styles.accountSignup}>
          <Text style={styles.blackFont}>Already have an account?</Text>

          <TouchableOpacity
            onPress={() => {
              console.log('Add Navigation for login screen here');
            }}>
            <Text style={styles.redFont}>Sign in Here</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.blackFont}>Not Ready yet? No Worries</Text>

          <TouchableOpacity
            onPress={() => {
              console.log('Add Navigation for home screen here');
            }}>
            <Text style={styles.redFont}>Continue as a Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
