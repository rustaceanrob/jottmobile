import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../config/firebase";

const NewProject = ({route, navigation}) => {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { user } = UserAuth()
    const uid = user?.uid
    const { lang, frameworks } = route.params

    async function handleCreate() {
        Keyboard.dismiss()
        if (name !== "") {
            try {
                const collectionRef = collection(db, `users/${uid}/projects/`);
                const docRef = await addDoc(collectionRef, { "name": name, "description": des});
                navigation.navigate("NewSnippet", {
                    projectId: docRef.id,
                    lang: lang,
                    frameworks: frameworks
                })
                setLoading(false)
            } catch(error) {
                console.log(error)
                setLoading(false)
                setError(true)
            }
        }
    }
    

    return (
        <SafeAreaView className="w-full h-screen bg-zinc-950">
            <View className="flex flex-col pt-5 pb-40 space-y-5 pl-5 pr-5">
                <TouchableOpacity className="" onPress={() => navigation.goBack()}>
                    <Text className="font-bold text-gray-300">Back</Text>
                </TouchableOpacity>
                <View className="border border-zinc-700 rounded-md px-5 py-5 w-full space-y-5 pl-5 pr-5">
                    <Text className="text-gray-300 font-extrabold text-lg">Name</Text>
                    <TextInput multiline={false} className="text-xl w-full text-white rounded-md px-2 py-2 border border-zinc-700"
                    placeholder='' value={name} onChangeText={setName} autoCapitalize='none'/>
                    <Text className="text-gray-300 font-extrabold text-lg">Project Description</Text>
                    <TextInput multiline={true} numberOfLines={4} className="text-xl w-full text-white rounded-md px-2 py-2 border border-zinc-700"
                    value={des} onChangeText={setDes} autoCapitalize='none'/>
                    <TouchableOpacity className="flex flex-row justify-center items-center border border-zinc-700 px-5 py-5 rounded-md w-full" onPress={handleCreate}>
                        <Text className="font-extrabold text-gray-300 text-lg pr-2">Create Project</Text>
                        <MaterialCommunityIcons name="folder-edit-outline" color={loading ? 'gray' : 'white'} size={24}/>
                    </TouchableOpacity>
                </View>
                {
                    loading ? (
                        <View className="flex flex-col justify-center items-center pt-5 pl-10 pr-10 border border-zinc-700 px-5 py-5 rounded-md">
                            <Text className="text-gray-400 font-semibold text-md">That project is being created</Text>
                        </View>
                    ) : (
                        <></>
                    )
                }
                {
                    error ? (
                        <View className="flex flex-col justify-center items-center pt-5 pl-10 pr-10 border border-zinc-700 px-5 py-5 rounded-md">
                            <Text className="text-gray-400 font-semibold text-md">Something went wrong creating your project</Text>
                        </View>
                    ) : (
                        <></>
                    )
                }
            </View>
        </SafeAreaView>
    )
}

export default NewProject