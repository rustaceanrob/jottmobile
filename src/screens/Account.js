import { View, SafeAreaView, TouchableOpacity, Image, Text, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
    const { user, logOut } = UserAuth()
    const [loading, setLoading] = useState(false)
    const [signup, setSignup] = useState('')
    useEffect(() => {
        setSignup(new Date(user?.metadata?.creationTime).toISOString().substring(0, 10))
    }, [user])

    const handleLogout = async () => {
        setLoading(true)
        await logOut()
    }

    return (

            <SafeAreaView className="flex flex-col h-screen w-full justify-start items-center bg-zinc-950">
                <View className="pt-20 flex flex-col justify-between items-cente w-full pl-5 pr-5">
                    <View className="flex flex-col justify-start items-start border border-zinc-700 px-5 py-5 rounded-md">
                        <Text className="text-gray-300 font-bold text-2xl pb-5">Account Details</Text>
                        <Text className="text-gray-400 font-bold text-md">Date Joined: {signup}</Text>
                        <Text className="text-gray-400 font-bold text-md">Email: {user.email}</Text>
                    </View>
                    <View className="flex flex-row pt-10">
                        <TouchableOpacity className="flex flex-row justify-center items-center border border-zinc-700 px-5 py-5 rounded-md w-full" onPress={handleLogout}>
                            <Text className="font-extrabold text-gray-300 text-xl pr-2">Sign Out</Text>
                            <FontAwesome name="sign-out" color={loading ? 'gray' : 'white'} size={24}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>

    )
}

export default Account