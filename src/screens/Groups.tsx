import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GroupComponent from '../component/GroupComponent';

const HomePage = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.contactHeading}>Groups</Text>
      <GroupComponent
        groupName="Mitsubishi Motors"
        noOfContacts="8 Contacts"
        groupColor="#FF6767"
      />
      <GroupComponent
        groupName="Kenwood"
        noOfContacts="12 Contacts"
        groupColor="#FFCB67"
      />
      <GroupComponent
        groupName="Honda Electric"
        noOfContacts="6 Contacts"
        groupColor="#FF7D54"
      />
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
