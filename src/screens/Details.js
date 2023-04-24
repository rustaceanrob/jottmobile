import { View, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import React from 'react'

const Details = ({navigation}) => {
    return (
        <LinearGradient colors={['#374151', '#111827']} className="w-full h-screen">
            <View className="flex flex-col h-screen w-full justify-between items-center bg-gray-800 pl-10 pr-10 pt-20 pb-20">
                <View className="flex flex-col justify-center items-center space-y-20 pt-40">
                    <View className="flex flex-col justify-center items-center">
                        <Text className="text-2xl font-extrabold text-gray-200 pb-5">15+ languages.</Text>
                        <View className="flex flex-row justify-between space-x-5">
                            <FontAwesome5 name="python" color="purple" size={40}/>
                            <MaterialCommunityIcons name="language-javascript" color="purple" size={40}/>
                            <MaterialCommunityIcons name="language-swift" color="purple" size={40}/>
                            <MaterialCommunityIcons name="language-kotlin" color="purple" size={40}/>
                        </View>
                    </View>
                    <View className="flex flex-col justify-center items-center pb-20">
                        <Text className="text-2xl font-extrabold text-gray-200 pb-5">And 20+ frameworks.</Text>
                        <View className="flex flex-row justify-between space-x-5">
                            <MaterialCommunityIcons name="angular" color="purple" size={40}/>
                            <MaterialCommunityIcons name="react" color="purple" size={40}/>
                            <MaterialCommunityIcons name="tailwind" color="purple" size={40}/>
                            <MaterialCommunityIcons name="firebase" color="purple" size={40}/>
                        </View>
                    </View>
                </View>
                <TouchableOpacity className="flex flex-row justify-center items-center border border-gray-700 px-5 py-5 rounded-md w-full bg-gray-700/50" onPress={() => navigation.navigate('Organization')}>
                    <Text className="font-extrabold text-gray-300 text-xl pr-2">Next</Text>
                    <MaterialIcons name="navigate-next" color="white" size={24}/>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default Details