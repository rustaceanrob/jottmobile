import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const LanguageIcon = ({language}) => {
  return (
    <View>
        {
            {
                "Python": <FontAwesome5 name="python" color="white" size={15}/>,
                "Java": <FontAwesome5 name="java" color="white" size={15}/>,
                "JavaScript": <MaterialCommunityIcons name="language-javascript" color="white" size={15}/>,
                "TypeScript": <MaterialCommunityIcons name="language-typescript" color="white" size={15}/>,
                "Swift": <MaterialCommunityIcons name="language-swift" color="white" size={15}/>,
                "Kotlin": <MaterialCommunityIcons name="language-kotlin" color="white" size={15}/>,
                "Ruby": <MaterialCommunityIcons name="language-ruby" color="white" size={15}/>,
                "PHP": <MaterialCommunityIcons name="language-php" color="white" size={15}/>,
            } [language] || <></>
        }
    </View>
  )
}

export default LanguageIcon