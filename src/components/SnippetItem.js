import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 

const SnippetItem = ({name, prompt, lang, frameworks, projectId, id, navigation}) => {    
    const handleClick = () => {
        navigation.navigate('SnippetView', {
            projectId: projectId,
            snippetId: id,
            prompt: prompt,
            lang: lang,
            frameworks: frameworks,
          });
    }

    return (
        <View className="p-2 w-full">
            <TouchableOpacity className="flex flex-col border rounded-md border-zinc-700 px-4 py-4 bg-zinc-900" onPress={handleClick}>
                <View className="flex flex-row pb-2 justify-between items-center">
                    <View className="flex flex-row justify-center items-center">
                        <Text className="text-gray-200 font-extrabold pr-2">{name}</Text>
                        <FontAwesome name="file-code-o" size={20} color="white" />
                    </View>
                    <View className="flex flex-row justify-center items-center pt-2 pb-2 space-x-2">
                        <Text className="text-gray-200 font-extrabold">{lang}</Text>
                        <FontAwesome name="code" size={20} color="white" />  
                    </View>
                </View>
                <Text className="text-gray-300 font-semibold pt-2">{prompt}</Text>  
            </TouchableOpacity>
        </View>
    )
    }

export default SnippetItem