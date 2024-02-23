import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../component/Button';
import BottomText from '../../component/BottomText';
import InputField from '../../component/InputField';

const Signup = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          style={styles.experionLogo}
          source={require('../../assets/logo-dark.png')}
        />
      </View>

      <View>
        <InputField heading="Name" placeholderName="Full Name" />

        <InputField heading="E-Mail" placeholderName="E-Mail" />

        <InputField heading="Password" placeholderName="Password" />

        <Button title="SIGNUP" navigationPath="Login" />
      </View>
      <View>
        <BottomText
          descText="Already Have an Account? "
          buttonClickable="Login!"
          navigationPath="Login"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F8FCFD',
    gap: 95,
    height: '100%',
  },
  experionLogo: {
    marginTop: 140,
    width: 205,
    height: 58,
  },
  inputContainer: {},
  inputField: {
    width: 340,
    height: 58,
    borderWidth: 1.5,
    borderColor: '#A1D5E3',
    borderRadius: 5,
    marginTop: -10,
    marginBottom: 20,
    paddingLeft: 20,
    zIndex: 0,
  },
  fullNameHeading: {
    marginLeft: 20,
    fontWeight: '500',
    color: 'black',
    backgroundColor: 'white',
    width: 65,
    height: 20,
    zIndex: 10,
  },
  emailHeading: {
    marginLeft: 20,
    fontWeight: '500',
    color: 'black',
    backgroundColor: 'white',
    width: 40,
    height: 20,
    zIndex: 10,
  },
  passwordHeading: {
    marginLeft: 20,

    color: 'black',
    fontWeight: '500',
    backgroundColor: 'white',
    width: 65,
    height: 20,
    zIndex: 1,
  },
  forgetPasswordText: {
    textAlign: 'center',
    marginTop: 15,
    color: 'black',
  },
  signupDescText: {
    color: 'black',
  },
  signupText: {
    fontWeight: '500',
    color: '#E53F3F',
  },
});

export default Signup;
