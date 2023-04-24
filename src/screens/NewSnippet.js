import { View, Text } from 'react-native'
import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { getFunctions, httpsCallable } from "firebase/functions"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, collection, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from "../config/firebase";

const NewSnippet = ({route, navigation}) => {
    const [name, setName] = useState('')
    const [prompt, setPrompt] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { user } = UserAuth()
    const uid = user?.uid
    const { projectId, lang, frameworks } = route.params
    const functions = getFunctions()
    const getEdit = httpsCallable(functions, 'getEdit')

    function formatList(list) {
        if (list.length === 0) {
          return "";
        } else if (list.length === 1) {
          return list[0];
        } else if (list.length === 2) {
          return list[0] + " and " + list[1];
        } else {
          var result = "";
          for (var i = 0; i < list.length - 1; i++) {
            result += list[i] + ", ";
          }
          result += "and " + list[list.length - 1];
          return result;
        }
    }

    function handleCreate() {
        Keyboard.dismiss()
        if (prompt !== "" && name !== "") {
            setLoading(true)
            getEdit({lang: lang, frames: formatList(frameworks), prompt: prompt, previousMessage: modelResponse, edit: edit}).then((response) => {
                const code = response.data.content.trim()
                updateDoc(doc(collection(db, `users/${uid}/projects/${projectId}/snippets/`), snippetId), {"modelResponse": code}).then((response) => {
                    setLoading(false)
                    navigation.navigate('ProjectList')
                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                    setError(true)
                })
            }).catch((error) => {
                console.log(error)
                setLoading(false)
                setError(true)
            })
        }
    }
    return (
        <SafeAreaView className="w-full h-screen bg-zinc-950">
            <View className="flex flex-col pt-5 pb-40 space-y-5">
                <TouchableOpacity className="pl-5" onPress={() => navigation.goBack()}>
                    <Text className="font-bold text-gray-300">Back</Text>
                </TouchableOpacity>
                <View className="border border-zinc-700 rounded-md px-5 py-5 w-full space-y-5 pl-5 pr-5">
                <Text className="text-gray-300 font-extrabold text-lg">Name</Text>
                    <TextInput multiline={true} numberOfLines={4} className="text-xl w-full text-white rounded-md px-2 py-2 border border-zinc-700"
                    placeholder='How will you remember this?' value={name} onChangeText={setName} autoCapitalize='none'/>
                    <Text className="text-gray-300 font-extrabold text-lg">What needs to be coded?</Text>
                    <TextInput multiline={true} numberOfLines={4} className="text-xl w-full text-white rounded-md px-2 py-2 border border-zinc-700"
                    placeholder='Make a Login screen' value={prompt} onChangeText={setPrompt} autoCapitalize='none'/>
                    <TouchableOpacity className="flex flex-row justify-center items-center border border-zinc-700 px-5 py-5 rounded-md w-full" onPress={handleCreate}>
                        <Text className="font-extrabold text-gray-300 text-xl pr-2">Create Code</Text>
                        <MaterialCommunityIcons name="cube-send" color={loading ? 'gray' : 'white'} size={24}/>
                    </TouchableOpacity>
                </View>
                {
                    loading ? (
                        <View className="flex flex-col justify-center items-center pt-5 pl-10 pr-10 border border-zinc-700 px-5 py-5 rounded-md">
                            <Text className="text-gray-400 font-semibold text-md">Your code has been submitted. Responses can take up to a minute. Head to your projects to edit the snippet.</Text>
                        </View>
                    ) : (
                        <></>
                    )
                }
                {
                    error ? (
                        <View className="flex flex-col justify-center items-center pt-5 pl-10 pr-10 border border-zinc-700 px-5 py-5 rounded-md">
                            <Text className="text-gray-400 font-semibold text-md">Something went wrong getting that edit.</Text>
                        </View>
                    ) : (
                        <></>
                    )
                }
            </View>
        </SafeAreaView>
    )
}

export default NewSnippet