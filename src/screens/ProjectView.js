import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../config/firebase'
import { collection, onSnapshot } from "firebase/firestore";
import SnippetItem from '../components/SnippetItem';

const ProjectView = ({route, navigation}) => {
  const { user } = UserAuth()
  const uid = user?.uid
  const [snippets, setSnippets] = useState()
  const { projectId } = route.params

  const renderItem = ({item}) => <SnippetItem lang={item.lang} name={item.name} prompt={item.prompt} frameworks={item.frameworks} projectId={projectId} id={item.id} navigation={navigation}/>

  useEffect(() => {
    const projectsRef = collection(db, `users/${uid}/projects/${projectId}/snippets`)
    const unsubscribe = onSnapshot(projectsRef, (snapshot) => {
      const snips = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSnippets(snips);
    });
    return () => unsubscribe();
  }, [uid, projectId]);

  return (
    <SafeAreaView className="w-full h-screen bg-zinc-950">
            <View className="pt-5">
              <TouchableOpacity className="flex flex-row justify-end items-start" onPress={() => navigation.goBack()}>
                  <Text className="text-gray-300 font-extrabold pr-2">Back</Text>
              </TouchableOpacity>
          </View>
          {snippets ? ( 
              <View className="w-full pt-5 pb-20">
                  {
                      snippets.length === 0 ? (
                        <View className="flex flex-col justify-center items-center">
                          <Text className="text-lg text-gray-500 font-bold pt-20">You don't have any snippets yet</Text>
                        </View>
                      ) : (
                          <FlatList
                              data={snippets}
                              renderItem={renderItem}
                              keyExtractor={(item) => item.id}
                          />
                      )
                  }
              </View>
          ) : (
            <View className="flex flex-col justify-center items-center">
              <Text className="text-lg text-gray-500 font-bold pt-20">Fetching snippets</Text>
            </View>
          )}
    </SafeAreaView>
  )
}

export default ProjectView