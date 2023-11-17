import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Onboard, Register, Splash} from '../screen';
import {ROUTE} from '../constants';
import {useAppDispatch, useAppSelector} from '../utils';
import {RootState} from '../redux';
import {globalAction} from '../redux/actions';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const dispatch = useAppDispatch();
  const finishedOnboard = useAppSelector(
    (state: RootState) => state.global.finish_onboard,
  );

  useEffect(() => {
    dispatch(globalAction.getOnboardStatus());
  }, [dispatch]);

  useEffect(() => {
    console.log(finishedOnboard);
  }, [finishedOnboard]);

  return (
    <Stack.Navigator
      initialRouteName={finishedOnboard ? ROUTE.SPLASH : ROUTE.ONBOARD}>
      <Stack.Screen
        name={ROUTE.SPLASH}
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE.ONBOARD}
        component={Onboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE.REGISTER}
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
