import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Contact = (props: any) => {
  return (
    <View style={styles.contactContainer}>
      <View
        style={[
          styles.profileImage,
          {backgroundColor: props.profileImageColor},
        ]}>
        <Text style={styles.profileImageLetter}>
          {props.profileImageLetter}
        </Text>
      </View>
      <Text style={styles.contactName}>{props.contactName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageLetter: {
    fontSize: 30,
    fontWeight: '500',
    color: 'black',
  },
  contactName: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: '400',
    color: 'black',
  },
});

export default Contact;
