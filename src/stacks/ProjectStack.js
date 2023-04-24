import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Projects from '../screens/Projects';
import ProjectView from '../screens/ProjectView';
import Snippet from '../screens/Snippet';
import EditSnippet from '../screens/EditSnippet';
const Stack = createNativeStackNavigator();

const ProjectStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="ProjectList" 
        component={Projects} options={{ headerShown: false }} />
        <Stack.Screen name="ProjectView" 
        component={ProjectView} options={{ headerShown: false }} />
        <Stack.Screen name="SnippetView" 
        component={Snippet} options={{ headerShown: false }} />
        <Stack.Screen name="EditSnippet" 
        component={EditSnippet} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default ProjectStack