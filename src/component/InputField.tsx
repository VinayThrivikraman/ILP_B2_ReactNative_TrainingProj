import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const InputField = (props: any) => {
  return (
    <View>
      <View>
        <Text style={styles.heading}>{props.heading}</Text>
      </View>
      <TextInput
        style={styles.inputField}
        value={props.value}
        placeholder={props.placeholderName}
        onChangeText={props.onChangeText}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginLeft: 20,
    fontWeight: '500',
    color: 'black',
    backgroundColor: '#F8FCFD',
    alignSelf: 'flex-start',
    height: 20,
    zIndex: 1,
  },
  inputField: {
    width: 340,
    height: 58,
    borderWidth: 1.5,
    borderColor: '#A1D5E3',
    borderRadius: 5,
    marginTop: -10,
    marginBottom: 20,
    paddingLeft: 20,
    zIndex: -1,
  },
});

export default InputField;
