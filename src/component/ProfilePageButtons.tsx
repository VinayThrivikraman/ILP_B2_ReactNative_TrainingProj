import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ProfilePageButtons = (props: any) => {
  const onPress = () => {
    props.function();
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.profileButtons,
        backgroundColor: `${props.backgroundColor}`,
      }}
      onPress={onPress}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileButtons: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 340,
    height: 58,
    borderRadius: 5,
    marginTop: 15,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});

export default ProfilePageButtons;
