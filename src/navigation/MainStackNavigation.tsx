import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import DetailsInputScreen from '../screens/DetailsInputScreen';
import CardListScreen from '../screens/CardListScreen';
import CardDetailsScreen from '../screens/CardDetailScreen';
import EditCardDetailsScreen from '../screens/EditCardDetailsScreen';

const StackNav = createNativeStackNavigator();

export function MainStackNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="CardDetailsScreen"
        component={CardDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="DetailsInputScreen"
        component={EditCardDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
}
