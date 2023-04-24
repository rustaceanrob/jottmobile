import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';  

const ProjectItem = ({name, description, id, navigation}) => {

    const handleClick = () => {
        navigation.navigate('ProjectView', {
            projectId: id,
          });
    }

    return (
        <View className="p-2">
            <TouchableOpacity className="flex flex-row border rounded-md border-zinc-700 space-x-10 pb-4 pt-2 w-full bg-zinc-900" onPress={handleClick}>
                <View className="flex flex-col items-start pl-5 pr-5">
                    <View className="flex flex-row pt-2 pb-2 space-x-2 justify-center items-center">
                        <Text className="text-gray-200 font-extrabold">{name}</Text>
                        <AntDesign name="folderopen" size={15} color="white" />  
                    </View>
                    <View className="pt-2 pb-2 flex flex-col space-y-1">
                        <Text className="text-gray-300">Project Description: </Text>
                        <Text className="text-gray-300 font-semibold">{description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProjectItem