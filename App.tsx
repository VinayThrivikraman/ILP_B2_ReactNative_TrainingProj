import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreenNavigation } from './src/navigation/LoginScreenNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <LoginScreenNavigation />
    </NavigationContainer>
  );
};

export default App;