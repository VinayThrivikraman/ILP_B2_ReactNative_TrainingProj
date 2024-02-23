import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SearchBar from '../component/searchBar';
import Contact from '../component/Contact';
import {userLogin} from '../context/userSlice';
import {useDispatch} from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const LogoutFunction = () => {
    dispatch(userLogin(false));
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.contactHeading}>Contacts</Text>
      <SearchBar></SearchBar>
      <Contact
        contactName="Makoto Shinkai"
        profileImageLetter="M"
        profileImageColor="#83DAFF"
      />
      <Contact
        contactName="Steve Jobs"
        profileImageLetter="S"
        profileImageColor="#FFE382"
      />
      <Contact
        contactName="John Doe"
        profileImageLetter="J"
        profileImageColor="#74F372"
      />
      <Contact
        contactName="Jayan MS"
        profileImageLetter="J"
        profileImageColor="#F484FE"
      />
      <TouchableOpacity onPress={LogoutFunction}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  contactHeading: {
    marginTop: 100,
    marginBottom: 20,
    fontSize: 38,
    fontWeight: '500',
    color: 'black',
  },
});

export default HomePage;
