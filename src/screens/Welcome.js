import { View, SafeAreaView, TouchableOpacity, Image, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
        <LinearGradient colors={['#374151', '#111827']} className="w-full h-screen">
            <View className="flex flex-col h-screen w-full justify-between items-center bg-gray-800">
                <Text className="pt-20 text-xl font-extrabold text-gray-200"></Text>
                <Image source={require('../assets/jott_logo_1.png')} style={{width: 250, height: 250, alignSelf: 'center'}}/>
                <View className="flex flex-col w-full justify-center items-center pb-20 space-y-4 pl-10 pr-10">
                    <Text className="text-gray-400 font-bold pb-2">Choose how to start</Text>
                    <TouchableOpacity className="flex flex-row justify-center items-center pb-20 border border-gray-700 px-5 py-5 rounded-md w-full" onPress={() => navigation.navigate('Summary')}>
                        <Text className="font-extrabold text-gray-300 text-xl pr-2">Register</Text>
                        <AntDesign name="adduser" color="white" size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-center items-center border border-gray-700 px-5 py-5 rounded-md w-full bg-gray-700/50" onPress={() => navigation.navigate('Login')}>
                        <Text className="font-extrabold text-gray-300 text-xl pr-2">Sign In</Text>
                        <Entypo name="login" color="white" size={24}/>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
  )
}

export default Welcome