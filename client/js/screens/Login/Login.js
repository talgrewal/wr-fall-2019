import React from 'react';
import AccountLoginForm from '../../components/AccountLoginForm';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LogoImage from '../../assets/headingelement/worldrevolutionblack.png';
import styles from './styles';
import {SafeAreaView} from 'react-navigation';
import {withNavigation} from 'react-navigation';
import {createToken} from '../../config/modals';

const Login = ({navigation}) => {
  return (
    <View height="40%" style={styles.pageContainer}>
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

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.redFont}>Continue as a Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default withNavigation(Login);
