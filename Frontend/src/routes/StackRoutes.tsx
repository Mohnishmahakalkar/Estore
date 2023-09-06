import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../login/Login';
import {LIGHT_COLORS} from '../theme/colors';
import TabRoutes from './TabRoutes';
import Profile from '../profile/Profile';

const StackRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {backgroundColor: LIGHT_COLORS.StatusBar},
          headerTintColor: LIGHT_COLORS.TextColor,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={TabRoutes}
          options={{
            headerShown: true,
            headerBackVisible: false,
            title: 'Estore',
            headerTitleStyle: {
              fontFamily: 'StylishCalligraphyDemo-XPZZ',
              fontSize: 42,
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            title: 'Profile',
            headerTitleStyle: {
              fontFamily: 'StylishCalligraphyDemo-XPZZ',
              fontSize: 30,
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackRoutes;
