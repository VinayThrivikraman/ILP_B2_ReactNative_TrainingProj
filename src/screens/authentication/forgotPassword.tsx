import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../component/Button';
import InputField from '../../component/InputField';

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
        <InputField heading="E-Mail" placeholderName="E-Mail" />

        <Button title="SEND OTP" navigationPath="OTPScreen" />
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
});

export default ForgotPassword;
