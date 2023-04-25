import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LanguageSelection from '../screens/LanguageSelection';
import FrameworkSelection from '../screens/FrameworkSelection';
import ProjectSelection from '../screens/ProjectSelection';
import NewSnippet from '../screens/NewSnippet';
import NewProject from '../screens/NewProject';

const Stack = createNativeStackNavigator();

const SnippetStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="LanguageSelection" 
        component={LanguageSelection} options={{ headerShown: false }} />
        <Stack.Screen name="FrameworkSelection" 
        component={FrameworkSelection} options={{ headerShown: false }} />
        <Stack.Screen name="ProjectSelection" 
        component={ProjectSelection} options={{ headerShown: false }} />
        <Stack.Screen name="NewSnippet" 
        component={NewSnippet} options={{ headerShown: false }} />
        <Stack.Screen name="NewProject" 
        component={NewProject} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default SnippetStack