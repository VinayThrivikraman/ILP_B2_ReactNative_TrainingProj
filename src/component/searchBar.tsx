import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const SearchBar = (props: any) => {
  return (
    <View>
      <TextInput
        style={styles.inputField}
        value={props.value}
        placeholder="Search Contacts"
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 30,
    height: 45,
    paddingLeft: 20,
    backgroundColor: '#E8EDF2',
    borderRadius: 12,
  },
});

export default SearchBar;
