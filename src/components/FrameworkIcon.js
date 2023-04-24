import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const FrameworkIcon = ({framework}) => {
  return (
    <View>
        {
            {
                "Firebase": <MaterialCommunityIcons name="firebase" color="white" size={15}/>,
                "Google Cloud Platform": <MaterialCommunityIcons name="google" color="white" size={15}/>,
                "Angular": <MaterialCommunityIcons name="angular" color="white" size={15}/>,
                "Bootstrap": <MaterialCommunityIcons name="bootstrap" color="white" size={15}/>,
                "Node.js": <MaterialCommunityIcons name="nodejs" color="white" size={15}/>,
                "React": <MaterialCommunityIcons name="react" color="white" size={15}/>,
                "React Native": <MaterialCommunityIcons name="react" color="white" size={15}/>,
                "Tailwind": <MaterialCommunityIcons name="tailwind" color="white" size={15}/>,
                "Vue.js": <MaterialCommunityIcons name="vuejs" color="white" size={15}/>,
                "Amazon Web Services": <MaterialCommunityIcons name="aws" color="white" size={15}/>,
                "Microsoft Azure": <MaterialCommunityIcons name="microsoft-azure" color="white" size={15}/>,
                "DigitalOcean": <MaterialCommunityIcons name="digital-ocean" color="white" size={15}/>,

            } [framework] || <></>
        }
    </View>
  )
}

export default FrameworkIcon