import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const ShimmerComponent = () => {
  return (
    <View style={styles.contactContainer}>
      <ShimmerPlaceholder
        style={[
          styles.profileImage,
          {backgroundColor: '#C21045'},
        ]}></ShimmerPlaceholder>
      <ShimmerPlaceholder style={styles.contactName}></ShimmerPlaceholder>
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
    color: 'white',
  },
  contactName: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: '400',
    color: 'black',
  },
});

export default ShimmerComponent;
