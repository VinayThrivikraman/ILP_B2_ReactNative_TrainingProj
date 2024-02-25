import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import UserDetailsPage from '../screens/UserDetailsPage';

const BottomNav = createBottomTabNavigator();
export function AppNavigation() {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Profile"
        component={UserDetailsPage}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
    </BottomNav.Navigator>
  );
}
