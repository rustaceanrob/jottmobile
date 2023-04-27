import { View, TouchableOpacity, Keyboard , Text, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const ResetPassword = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { resetPassword } = UserAuth()
    
    const handleLogin = async () => {
        setLoading(true)
        Keyboard.dismiss()
        try { 
          await resetPassword(email, setEmailSent, setError)
        } catch(error) {
          setLoading(false)
        }
    }

    return (
        <LinearGradient colors={['#111827', '#374151']} className="w-full h-screen">
        <View className="flex flex-col h-screen w-full justify-start items-center">
        <View className="w-full pl-10 pr-10 space-y-5 pt-20 ">
            <View className="border border-gray-700 rounded-md px-5 py-5 w-full space-y-2">
            <Text className="text-gray-300 font-extrabold text-lg">Email</Text>
            <TextInput className="text-xl w-full text-white bg-gray-800/80 rounded-md px-2 py-2 border border-gray-700"
            placeholder='' value={email} onChangeText={setEmail} textAlignVertical={'start'} keyboardType='email-address' autoCapitalize='none' autoCorrect={false}/>
            </View>
            <TouchableOpacity className="flex flex-row justify-center items-center border border-gray-700 px-5 py-5 rounded-md w-full" onPress={handleLogin}>
                <Text className="font-extrabold text-gray-300 text-xl pr-2">Reset Password</Text>
                <MaterialCommunityIcons name="lock-reset" color={loading ? 'gray' : 'white'} size={24}/>
            </TouchableOpacity>
            {
                error ? (
                    <View className="flex flex-col justify-center items-center pt-5 pl-10 pr-10 border border-zinc-700 px-5 py-5 rounded-md">
                        <Text className="text-gray-400 font-semibold text-md">There was an error sending your password reset.</Text>
                    </View>
                ) : (
                    <></>
                )
            }
                        {
                emailSent ? (
                    <View className="flex flex-col justify-center items-center pt-5 pl-10 pr-10 border border-zinc-700 px-5 py-5 rounded-md">
                        <Text className="text-gray-400 font-semibold text-md">A password reset was sent to your email.</Text>
                    </View>
                ) : (
                    <></>
                )
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

export default ResetPassword