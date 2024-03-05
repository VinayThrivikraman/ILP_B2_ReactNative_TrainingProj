import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactsPage from '../screens/HomePage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useIsFocused} from '@react-navigation/native';
import ProfilePage from '../screens/ProfilePage';
import {StyleSheet} from 'react-native';
import CardListScreen from '../screens/CardListScreen';
import CardDetailsPage from '../screens/CardDetailScreen';

const StackNav = createNativeStackNavigator();
const NewAppNavigation = () => {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNav.Screen name="Home" component={HomeBottomBarNavigation} />
      <StackNav.Screen name="CardListStack" component={CardStackNavigation} />
    </StackNav.Navigator>
  );
};

const BottomBarNavigation = createBottomTabNavigator();
const HomeBottomBarNavigation = () => {
  return (
    <BottomBarNavigation.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
          borderWidth: 0,
        },
        tabBarStyle: {
          backgroundColor: '#F0F8FA',
          borderColor: '#F8FCFD',
          shadowColor: '#F8FCFD',
          paddingBottom: 14,
          paddingTop: 10,
          zIndex: 10,
          height: 90,
          marginTop: -30,
        },
        tabBarActiveTintColor: '#1E3A41',
        tabBarInactiveTintColor: '#6D8B92',
      }}>
      <BottomBarNavigation.Screen
        name="Contacts"
        component={ContactsPage}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="contacts"
              size={36}
              color={useIsFocused() ? '#1E3A41' : '#6D8B92'}
            />
          ),
        }}
      />
      <BottomBarNavigation.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="person-circle-outline"
              size={36}
              color={useIsFocused() ? '#1E3A41' : '#6D8B92'}
            />
          ),
        }}
      />
    </BottomBarNavigation.Navigator>
  );
};

const CardStackNav = createNativeStackNavigator();

const CardStackNavigation = () => {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNav.Screen name="CardsListScreen" component={CardListScreen} />
      <StackNav.Screen name="CardDetailsPage" component={CardDetailsPage} />
    </StackNav.Navigator>
  );
};

export default NewAppNavigation;
