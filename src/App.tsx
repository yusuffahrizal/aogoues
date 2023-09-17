import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
