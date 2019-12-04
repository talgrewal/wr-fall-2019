import React from 'react';
import AccountLoginForm from '../../components/AccountLoginForm';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LogoImage from '../../assets/headingelement/worldrevolutionblack.png';
import styles from './styles';
import {SafeAreaView} from 'react-navigation';

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.pageContainer}>
        {/* <View style={styles.logo}> */}
        <Image
          style={{resizeMode: 'contain', height: 180, width: 180}}
          source={LogoImage}
        />

        <AccountLoginForm style={styles.pageForm} />

        <View style={styles.loginInfo}>
          <View>
            <Text>Don't have an Account?</Text>
            <Text>Sign up Here</Text>
          </View>

          <View>
            <Text>Not Ready yet? No Worries</Text>
            <Text>Continue as a Guest</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
