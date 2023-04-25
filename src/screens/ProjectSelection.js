import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext'
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

const ProjectSelection = ({route, navigation}) => {
    const { lang, frameworks } = route.params
    const { user } = UserAuth()
    const [projects, setProjects] = useState()
    const [projectId, setProjectId] = useState('')

    const handleNext = () => {
        if (projectId === "") { 
            navigation.navigate("NewProject", {
                lang: lang,
                frameworks: frameworks
            })
        } else {
            navigation.navigate("NewSnippet", {
                projectId: projectId,
                lang: lang,
                frameworks: frameworks
            })
        } 
    }

    const handleSelectProject = (item) => {
        setProjectId(item.id);
    }

    useEffect(() => {
        const projectsRef = collection(db, `users/${user.uid}/projects`)
        const unsubscribe = onSnapshot(projectsRef, (snapshot) => {
          const newProjects = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProjects(newProjects);
        });
        return () => unsubscribe();
      }, [user.uid])

    return (
        <SafeAreaView className="w-full h-screen bg-zinc-950">
            <View className="flex flex-col pt-5 pb-40">
                <View className="flex flex-row justify-between items-center pt-2 pl-5 pr-5">
                    <TouchableOpacity className="flex flex-row justify-center items-center" onPress={() => navigation.goBack()}>
                        <Text className="text-gray-300 font-extrabold pr-2">Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext}>
                        <Text className="text-gray-300 font-extrabold">Next</Text>
                    </TouchableOpacity>
                </View>
                {projects && 
                    <View className="flex flex-col pl-5 pr-5 pt-10">
                        <Text className="text-gray-300 font-extrabold text-md pb-2">Select a project</Text>
                        <ScrollView  className="space-y-2 px-2 py-2" showsHorizontalScrollIndicator={true}>
                            {projects.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                style={[
                                projectId === item.id && {backgroundColor: "#3f3f46"},
                                ]}
                                onPress={() => handleSelectProject(item)}>
                                <View className="w-full border border-zinc-800 justify-center items-center pl-2 pr-2">
                                    <Text className="text-gray-300 pt-2 pb-2 font-semibold">{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                            ))}
                            <TouchableOpacity
                                key={""}
                                style={[
                                projectId === "" && {backgroundColor: "#3f3f46"},
                                ]}
                                onPress={() => handleSelectProject({"name": "New Project", "id": ""})}>
                                <View className="w-full border border-zinc-800 flex flex-row justify-center items-center pl-2 pr-2">
                                    <Text className="text-gray-300 pt-2 pb-2 font-semibold pr-1">New Project</Text>
                                    <Ionicons name="add" size={20} color="white"/>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
      fontSize: 25,
      color: 'white',
      textAlign: 'left',
      fontWeight: 'bold',
    },
  });

export default ProjectSelection