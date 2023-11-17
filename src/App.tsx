import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import {store} from './redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
