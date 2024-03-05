import {StyleSheet, Text, View} from 'react-native';

const ProfileImage = (props: any) => {
  return (
    <View style={styles.profileImage}>
      <Text style={styles.profileLetter}>{props.profileLetter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    marginTop: 100,
    width: 100,
    height: 100,
    backgroundColor: '#FB5B5B',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileLetter: {
    fontSize: 50,
    color: 'black',
  },
});

export default ProfileImage;
