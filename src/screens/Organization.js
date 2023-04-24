import { View, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

const Organization = ({navigation}) => {
    return (
        <LinearGradient colors={['#374151', '#111827']} className="w-full h-screen">
            <View className="flex flex-col h-screen w-full justify-between items-center bg-gray-800 pl-10 pr-10 pt-20 pb-20">
                <View className="flex flex-col justify-center items-end">
                    <Text className="text-4xl font-extrabold text-gray-200 pt-10">Organize your code into projects. Access them later through the web app.</Text>
                </View>
                <TouchableOpacity className="flex flex-row justify-center items-center border border-gray-700 px-5 py-5 rounded-md w-full bg-gray-700/50" onPress={() => navigation.navigate('Registration')}>
                    <Text className="font-extrabold text-gray-300 text-xl pr-2">Register</Text>
                    <MaterialIcons name="navigate-next" color="white" size={24}/>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default Organization