import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ContactSectionProfile from '../component/ContactSectionProfile';
import ProfilePageButtons from '../component/ProfilePageButtons';
import {useDispatch} from 'react-redux';
import {setStringItem} from '../utils/Utils';
import {userLogin} from '../context/userSlice';
import Constants from '../utils/Constants';
import ProfileImage from '../component/ProfileImage';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const LogoutFunction = () => {
    setStringItem(Constants.IS_LOGIN, 'false');
    dispatch(userLogin(false));
  };

  return (
    <View style={styles.deviceScreen}>
      <View style={styles.mainContainer}>
        <View>
          <ProfileImage profileLetter="V"></ProfileImage>
          <Text style={styles.userName}>Hi Vinay!</Text>
          <View style={styles.userDetailsContainer}>
            <Text style={styles.userDetails}>Trainee</Text>
            <Text style={styles.userDetails}>vinay@gmail.com</Text>
          </View>

          <ContactSectionProfile totalContacts="10" contactGroups="8" />

          <View style={styles.buttonsContainer}>
            <ProfilePageButtons
              buttonText="View Shared Contacts"
              backgroundColor="#F8FCFD"
            />
            <ProfilePageButtons
              buttonText="Change Password"
              backgroundColor="#A1D5E3"
            />
            <ProfilePageButtons
              buttonText="Logout"
              backgroundColor="#F8FCFD"
              function={LogoutFunction}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deviceScreen: {
    backgroundColor: '#F8FCFD',
    height: '100%',
  },
  mainContainer: {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#F8FCFD',
  },
  userName: {
    fontSize: 40,
    color: 'black',
  },
  userDetailsContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  userDetails: {
    fontSize: 20,
  },
  buttonsContainer: {
    marginTop: 20,
  },
});

export default ProfilePage;
