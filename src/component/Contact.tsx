import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Contact = (props: any) => {
  const navigation: any = useNavigation();

  const contactClick = () => {
    navigation.navigate('CardListScreen', {
      card_id: props.card_id,
      contact_name: props.contact_name,
    });
  };

  return (
    <TouchableOpacity style={styles.contactContainer} onPress={contactClick}>
      <View style={[styles.profileImage, {backgroundColor: '#C21045'}]}>
        <Text style={styles.profileImageLetter}>
          {props.profileImageLetter}
        </Text>
      </View>
      <Text style={styles.contactName}>{props.contactName}</Text>
    </TouchableOpacity>
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
    color: 'white',
  },
  contactName: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: '400',
    color: 'black',
  },
});

export default Contact;
