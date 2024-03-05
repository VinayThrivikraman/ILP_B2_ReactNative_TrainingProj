import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const GroupComponent = (props: any) => {
  return (
    <View>
      <View
        style={{...styles.groupContainer, backgroundColor: props.groupColor}}>
        <View style={styles.groupDetailsContainer}>
          <View style={styles.groupDetails}>
            <Text style={styles.groupName}>{props.groupName}</Text>
            <View style={styles.noOfContactsContainer}>
              <Image source={require('../assets/Vector.png')} />
              <Text style={styles.noOfContacts}>{props.noOfContacts}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupContainer: {
    borderWidth: 1,
    borderColor: 'black',
    height: 146,
    borderRadius: 8,
    marginBottom: 20,
    zIndex: -1,
  },
  groupDetailsContainer: {
    marginLeft: 30,
    borderColor: 'black',
    height: 144,
    backgroundColor: 'white',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 1,
  },
  groupDetails: {
    marginTop: 20,
  },
  groupName: {
    marginLeft: 20,
    fontSize: 30,
    color: 'black',
  },
  noOfContactsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
  noOfContacts: {
    marginLeft: 20,
    fontSize: 20,
    color: 'black',
  },
});

export default GroupComponent;
