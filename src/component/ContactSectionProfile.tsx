import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ContactSectionProfile = (props: any) => {
  return (
    <View>
      <Text style={styles.textStyles}>
        Total Contacts: <Text>{props.totalContacts}</Text>
      </Text>
      <Text style={styles.textStyles}>
        Contact Groups: <Text>{props.contactGroups}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 20,
    color: 'black',
  },
});

export default ContactSectionProfile;
