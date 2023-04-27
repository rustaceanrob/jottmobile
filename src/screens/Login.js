import { View, SafeAreaView, TouchableOpacity, Keyboard , Text, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons'
import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { signInEmail, logOut } = UserAuth()
  
  const handleLogin = async () => {
      setLoading(true)
      Keyboard.dismiss()
      try { 
        await logOut()
        await signInEmail(email, password)
      } catch(error) {
        setError(true)
        setLoading(false)
      }
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
          <TouchableOpacity className="flex flex-row justify-center items-center border border-gray-700 px-5 py-5 rounded-md w-full" onPress={handleLogin}>
            <Text className="font-extrabold text-gray-300 text-xl pr-2">Sign In</Text>
            <Entypo name="login" color={loading ? 'gray' : 'white'} size={24}/>
          </TouchableOpacity>
          {
          error ? (
              <View className="flex flex-col justify-center items-center pt-5 pl-10 pr-10 border border-zinc-700 px-5 py-5 rounded-md">
                  <Text className="text-gray-400 font-semibold text-md">Something went wrong signing you in. Wrong password?</Text>
              </View>
            ) : (
                <></>
            )
          }
        </View>
        <View className="pt-10 justify-center items-center flex flex-col space-y-2">
          <TouchableOpacity onPress={() => navigation.navigate("Reset")}>
            <Text className="text-gray-500 font-extrabold">Reset password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Reverify")}>
            <Text className="text-gray-500 font-extrabold">Re-verify email</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text className="text-gray-500 font-extrabold">I don't have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Login