import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Summary from '../screens/Summary';
import Details from '../screens/Details';
import Organization from '../screens/Organization';
import Registration from '../screens/Registration';
import ResetPassword from '../screens/ResetPassword';
import Reverify from '../screens/Reverify';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Summary" component={Summary} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        <Stack.Screen name="Organization" component={Organization} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        <Stack.Screen name="Reset" component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Reverify" component={Reverify} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthStack