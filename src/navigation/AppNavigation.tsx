import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
            <MaterialIcons name="contacts" size={size} color={color} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Profile"
        component={HomePage}
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
