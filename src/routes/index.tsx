import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash} from '../screen';
import {ROUTE} from '../constants/_routes';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE.SPLASH}>
      <Stack.Screen
        name={ROUTE.SPLASH}
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
