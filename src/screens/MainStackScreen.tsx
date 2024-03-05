import React from 'react';
import {View} from 'react-native';

const MainStackScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {navigation.navigate('HomePage')} {/* Navigate to the home page */}
    </View>
  );
};

export {MainStackScreen};
