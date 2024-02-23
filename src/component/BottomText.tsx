import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BottomText = (props: any) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(props.navigationPath, {});
  };

  return (
    <Text style={styles.bottomText}>
      {props.descText}
      <Text style={styles.bottomClickable} onPress={onPress}>
        {props.buttonClickable}
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    color: 'black',
  },
  bottomClickable: {
    fontWeight: '500',
    color: '#E53F3F',
  },
});

export default BottomText;
