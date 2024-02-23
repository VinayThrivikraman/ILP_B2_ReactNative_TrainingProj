import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../component/Button';

const ForgotPassword = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          style={styles.experionLogo}
          source={require('../../assets/logo-dark.png')}
        />
      </View>

      <View>
        <View style={styles.otpContainer}>
          <View style={styles.otpBox}></View>
          <View style={styles.otpBox}></View>
          <View style={styles.otpBox}></View>
          <View style={styles.otpBox}></View>
          <View style={styles.otpBox}></View>
          <View style={styles.otpBox}></View>
        </View>
        <Button title="VERIFY" navigationPath="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F8FCFD',
    gap: 200,
    height: '100%',
  },
  experionLogo: {
    marginTop: 140,
    width: 205,
    height: 58,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  otpBox: {
    width: 47,
    height: 58,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
});

export default ForgotPassword;
