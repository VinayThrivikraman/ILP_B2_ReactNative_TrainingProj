import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const ScanButton = () => {
  const navigation: any = useNavigation();

  const scanButtonClick = () => {
    navigation.navigate('DetailsInputScreen', {});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.scanContainer} onPress={scanButtonClick}>
        <Image source={require('../assets/camer-icon.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '-60%',
    right: 20,
  },
  scanContainer: {
    width: 65,
    height: 65,
    borderRadius: 20,
    backgroundColor: '#A1D5E3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScanButton;
