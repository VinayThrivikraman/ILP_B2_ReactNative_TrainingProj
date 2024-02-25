import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../component/Button';
import InputField from '../../component/InputField';
import BottomText from '../../component/BottomText';
import {useNavigation} from '@react-navigation/native';
import {loginUser} from '../../network/apiHook';
import {setStringItem} from '../../utils/Utils';
import Constants from '../../utils/Constants';
import {userLogin} from '../../context/userSlice';
import {useDispatch} from 'react-redux';
import {userDetails} from '../../context/userDataSlice';

const Login = () => {
  const navigation = useNavigation();

  const forgotPasswordClick = () => {
    navigation.navigate('ForgotPassword', {});
  };

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const LoginFunction = async (email: string, password: string) => {
    console.log(email, password);

    const loginStatus = await loginUser({
      loginUserEmail: email,
      loginPassword: password,
    });

    console.log('\n\nLOGIN STATUS', loginStatus);

    if (loginStatus.success === true) {
      setStringItem(Constants.IS_LOGIN, 'true');
      dispatch(userLogin(true));
      dispatch(
        userDetails({
          token: loginStatus.loginResp.token,
          message: loginStatus.loginResp.message,
          user_id: loginStatus.loginResp.user_id,
          status: loginStatus.loginResp.status,
        }),
      );
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          style={styles.experionLogo}
          source={require('../../assets/logo-dark.png')}
        />
      </View>

      <View>
        <InputField
          heading="E-Mail"
          placeholderName="E-Mail"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          heading="Password"
          placeholderName="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Button
          function={() => {
            LoginFunction(email, password);
          }}
          title="LOGIN"
          navigationPath="HomePage"
        />
        <Text style={styles.forgetPasswordText} onPress={forgotPasswordClick}>
          Forgot Password?
        </Text>
      </View>
      <View>
        <BottomText
          descText="Don't Have an Account? "
          buttonClickable="Signup!"
          navigationPath="Signup"
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
    marginTop: 195,
    width: 205,
    height: 58,
  },
  forgetPasswordText: {
    textAlign: 'center',
    marginTop: 15,
    color: 'black',
  },
});

export default Login;
