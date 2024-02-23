import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View>
      <TextInput
        style={styles.inputField}
        value={text}
        placeholder="Search Contacts"
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 30,
    height: 45,
    paddingLeft: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
  },
});

export default SearchBar;
