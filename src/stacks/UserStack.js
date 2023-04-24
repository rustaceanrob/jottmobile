import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProjectStack from './ProjectStack';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Account from '../screens/Account';
import SnippetStack from './SnippetStack';

const Tab = createBottomTabNavigator();
const UserStack = () => {
  return (
    <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#09090b" },
          tabBarLabelStyle: {
            color: 'white',
          },
        }}
        sceneContainerStyle={{ backgroundColor: "#09090b" }}
      >
      <Tab.Screen name="Projects"
            options={{
              tabBarIcon: ({ focused }) => (
              <Entypo
                name="folder"
                color={focused ? "white" : "gray"}
                size={24}
              />
            ),
          }}>
            {() => <ProjectStack/>}
      </Tab.Screen>
      <Tab.Screen name="Add Code"
            options={{
              tabBarIcon: ({ focused }) => (
              <AntDesign
                name="addfile"
                color={focused ? "white" : "gray"}
                size={24}
              />
            ),
          }}>
            {() => <SnippetStack/>}
      </Tab.Screen>
      <Tab.Screen name="Profile"
            options={{
              tabBarIcon: ({ focused }) => (
              <AntDesign
                name="user"
                color={focused ? "white" : "gray"}
                size={24}
              />
            ),
          }}>
        {() => <Account/>}
      </Tab.Screen>
    </Tab.Navigator>
  )
}


export default UserStack