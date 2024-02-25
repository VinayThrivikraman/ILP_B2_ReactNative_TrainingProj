import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
  const isLoggedIn = useSelector((state: any) => state.userReducer.isLoggedIn);
  const userData = useSelector((state: any) => state.userDataReducer);

  console.log('isLoggedIn:', isLoggedIn);
  console.log('userData:', userData);
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.title}>Token</Text>
        {userData.token}
      </Text>
      <Text style={styles.title}>{userData.message}</Text>
      <Text style={styles.title}>{userData.user_id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfilePage;
