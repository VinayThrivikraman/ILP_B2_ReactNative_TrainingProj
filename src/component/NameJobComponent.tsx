import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../utils/colorPallete';

type NameJob = {
  contact_name: string;
  job_title: string;
};

const NameJobComponent = ({contact_name, job_title}: NameJob) => {
  return (
    <View style={styles.mainStyle}>
      <Text style={styles.NameText}>{contact_name}</Text>
      <Text style={styles.JobTexT}>{job_title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors['secondary-light'],
  },
  NameText: {
    fontSize: 35,
    color: colors['primary-text'],
    fontWeight: 'bold',
  },
  JobTexT: {
    fontSize: 23,
    color: colors['accent-grey'],
  },
});

export default NameJobComponent;
