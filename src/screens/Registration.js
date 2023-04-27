import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons'
import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const Registration = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [passwordDialog, setPasswordDialog] = useState(false)
    const { createEmail } = UserAuth()

    // const [appState, setAppState] = useState(AppState.currentState);

    // useEffect(() => {
    //     AppState.addEventListener('change', handleAppStateChange);

    //     return () => {
    //     AppState.removeEventListener('change', handleAppStateChange);
    //     };
    // }, []);

    // const handleAppStateChange = (nextAppState) => {
    //     if (appState.match(/inactive|background/) && nextAppState === 'active') {
    //     console.log('App has come to the foreground!');
    //     // Add your code to refresh the app here
    //     }
    //     setAppState(nextAppState);
    // };

    function handleSignup() {
        Keyboard.dismiss()
        if (password !== confirmPassword) { 
            setPasswordDialog(true)
            return
        }
        setPasswordDialog(false)
        createEmail(email, password, setError, setLoading, setEmailSent)
    }

    return (
        <LinearGradient colors={['#374151', '#111827']} className="w-full h-screen">
            <View className="flex flex-col h-screen w-full justify-between items-center bg-gray-800 pl-10 pr-10 pt-20 pb-20">
                <View className="w-full space-y-5">
                <View className="border border-gray-700 rounded-md px-5 py-5 w-full space-y-2">
                    <Text className="text-gray-300 font-extrabold text-lg">Email</Text>
                    <TextInput className="text-xl w-full text-white bg-gray-800/80 rounded-md px-2 py-2 border border-gray-700"
                    placeholder='' value={email} onChangeText={setEmail} textAlignVertical={'start'} keyboardType='email-address' autoCapitalize='none' autoCorrect={false}/>
                    <Text className="text-gray-300 font-extrabold text-lg">Password</Text>
                    <TextInput className="text-xl w-full text-white border-gray-700 focus:outline-none bg-gray-800/80 rounded-md px-2 py-2 border border-gray-700 focus:outline-gray-300"
                    placeholder='' value={password} onChangeText={setPassword} secureTextEntry/>
                    <Text className="text-gray-300 font-extrabold text-lg">Confirm Password</Text>
                    <TextInput className="text-xl w-full text-white border-gray-700 focus:outline-none bg-gray-800/80 rounded-md px-2 py-2 border border-gray-700 focus:outline-gray-300"
                    placeholder='' value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry/>
                </View>
                <TouchableOpacity className="flex flex-row justify-center items-center border border-gray-700 px-5 py-5 rounded-md w-full" onPress={handleSignup}>
                    <Text className="font-extrabold text-gray-300 text-xl pr-2">Register</Text>
                    <Entypo name="login" color={loading ? 'gray' : 'white'} size={24}/>
                </TouchableOpacity>
                <View className="pt-5 justify-center items-center flex flex-col space-y-2">
                    {
                        emailSent && <View className="flex flex-col justify-center items-center">
                                <Text className="text-xs text-gray-300 font-extrabold pb-5">A verification email was sent to your inbox. Please verify your email to sign in</Text>
                                <TouchableOpacity className="pt-5 border border-gray-700 px-5 py-5 rounded-md" onPress={() => navigation.navigate('Login')}><Text className="text-gray-300 font-extrabold">To Login</Text></TouchableOpacity>
                            </View>
                    }
                    {
                        passwordDialog && <View><Text className="text-gray-300 font-bold text-md">Passwords don't match</Text></View>
                    }
                    {
                        error && <View><Text className="text-gray-300 font-bold text-md">There was an error processing your request</Text></View>
                    }
                    {
                        !emailSent &&  <TouchableOpacity className="justify-center items-center flex flex-col" onPress={() => navigation.navigate('Login')}>
                                          <Text className="text-gray-500 font-bold">I have an account</Text>
                                       </TouchableOpacity>
                    }
                </View>
            </View>
            </View>
        </LinearGradient>
    )
}

export default Registration