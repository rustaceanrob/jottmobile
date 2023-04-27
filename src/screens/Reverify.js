import { View, TouchableOpacity, Keyboard , Text, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const Reverify = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const { reverify } = UserAuth()

    function handleReverify() {
        Keyboard.dismiss()
        reverify(email, password, setError, setLoading, setEmailSent)
    }

    return (
        <LinearGradient colors={['#111827', '#374151']} className="w-full h-screen">
            <View className="flex flex-col h-screen w-full justify-start items-center">
            <Text className="pt-20 text-4xl font-extrabold text-gray-200 pb-10">Welcome Back</Text>
            <View className="w-full pl-10 pr-10 space-y-5">
                <View className="border border-gray-700 rounded-md px-5 py-5 w-full space-y-2">
                <Text className="text-gray-300 font-extrabold text-lg">Email</Text>
                <TextInput className="text-xl w-full text-white bg-gray-800/80 rounded-md px-2 py-2 border border-gray-700"
                placeholder='' value={email} onChangeText={setEmail} textAlignVertical={'start'} keyboardType='email-address' autoCapitalize='none' autoCorrect={false}/>
                <Text className="text-gray-300 font-extrabold text-lg">Password</Text>
                <TextInput className="text-xl w-full text-white border-gray-700 focus:outline-none bg-gray-800/80 rounded-md px-2 py-2 border border-gray-700 focus:outline-gray-300"
                placeholder='' value={password} onChangeText={setPassword} secureTextEntry/>
                </View>
                <TouchableOpacity className="flex flex-row justify-center items-center border border-gray-700 px-5 py-5 rounded-md w-full" onPress={handleReverify}>
                    <Text className="font-extrabold text-gray-300 text-xl pr-2">Verify</Text>
                    <MaterialCommunityIcons name="lock-reset" color={loading ? 'gray' : 'white'} size={24}/>
                </TouchableOpacity>
                {
                    error ? (
                        <View className="flex flex-col justify-center items-center pt-5 pl-10 pr-10 border border-zinc-700 px-5 py-5 rounded-md">
                            <Text className="text-gray-400 font-semibold text-md">Something went wrong sending the verification email.</Text>
                        </View>
                    ) : (
                        <></>
                    )
                }
                {
                    emailSent && <View className="flex flex-col justify-center items-center">
                            <Text className="text-xs text-gray-300 font-extrabold pb-5">A verification email was sent to your inbox.</Text>
                        </View>
                }
            </View>
            <View className="pt-10 justify-center items-center flex flex-col space-y-2">
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text className="text-gray-500 font-extrabold">Back to Login</Text>
                </TouchableOpacity>
            </View>
            </View>
        </LinearGradient>
    )
}

export default Reverify