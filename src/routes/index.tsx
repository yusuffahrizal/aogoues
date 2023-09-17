import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash} from '../screen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
