import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { UserAuth } from '../context/AuthContext'
import { db } from '../config/firebase'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { Entypo } from '@expo/vector-icons';
import { irBlack } from 'react-syntax-highlighter/styles/hljs';
import {  doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from 'react'

const Snippet = ({route, navigation}) => {
    const { user } = UserAuth()
    const uid = user?.uid
    const { projectId, snippetId, prompt, lang, frameworks } = route.params
    const [blocks, setBlocks] = useState([])
    const [snippet, setSnippet] = useState()
    const [modelResponse, setModelResponse] = useState()

    const handleNext = () => {
        navigation.navigate('EditSnippet', {
            projectId: projectId,
            snippetId: snippetId,
            prompt: prompt,
            lang: lang,
            frameworks: frameworks,
            modelResponse: modelResponse
          })
    }

    useEffect(() => {
        const regex = /```[^`\s]*\s?/g
        const docRef = doc(db, 'users', uid, 'projects', projectId, 'snippets', snippetId)
        getDoc(docRef).then((doc) => {
            if (doc.exists()) {
                setSnippet(doc.data())
                setModelResponse(doc.data().modelResponse)
                setBlocks(doc.data().modelResponse.split(regex))
            } else {
                setError(true)
            }
          }).catch((error) => {
            console.log('Error getting document:', error)
          })
    }, [uid, projectId, snippetId])

    return (
            <ScrollView className="flex flex-col p-5 pb-5 pt-10 w-full bg-zinc-950">
                <View className="pt-5 pb-5">
                    <TouchableOpacity className="flex flex-row justify-end items-start" onPress={() => navigation.goBack()}>
                        <Text className="text-gray-300 font-extrabold pr-2">Back</Text>
                    </TouchableOpacity>
                </View>
                {
                    snippet ? (
                        <View className="pb-5 bg-zinc-950 pb-20 space-y-5">
                            <Text className="text-gray-300 text-md border-b border-zinc-500 font-semibold">{prompt}</Text>
                            {
                                blocks.map((codes, index) => {
                                    if (index % 2 === 0) {
                                        return <View key={index} >{codes !== "" &&  <View className="border border-zinc-500 px-4 py-4 rounded-md"><Text className="text-gray-300 font-semibold">{codes.trim()}</Text></View>}</View>
                                    }
                                    else {
                                        return (
                                            <View className="border border-zinc-500 overflow-scroll space-y-1" key={index}>
                                                <TouchableOpacity className="flex flex-row justify-end items-center p-1 bg-black" onPress={handleNext}>
                                                    <Text className="text-gray-300 text-md pr-2 font-bold">Edit</Text>
                                                    <Entypo name="edit" color="white" size={12}/>
                                                </TouchableOpacity>
                                                <SyntaxHighlighter 
                                                    language={snippet.lang.toLowerCase().replace('-', '')
                                                                        .replace('++', 'pp').replace('#', 'sharp').replace('jsx', 'javascript')
                                                                        .replace('tsx', 'typescript')}
                                                    style={irBlack}>
                                                    {codes.trim()}
                                                </SyntaxHighlighter>
                                            </View>
                                        )
                                    }
                                })
                            }
                        </View>
                    ) : (
                        <View className="flex flex-col justify-center items-center">
                            <Text className="text-lg text-gray-500 font-bold pt-20">Fetching that code</Text>
                        </View>
                    )
                }
            </ScrollView>
    )
}

export default Snippet