import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../config/firebase'
import { collection, onSnapshot } from "firebase/firestore";
import ProjectItem from '../components/ProjectItem';

const Projects = ({navigation}) => {
    const { user } = UserAuth()
    const uid = user?.uid
    const [projects, setProjects] = useState()

    const renderItem = ({item}) => <ProjectItem name={item.name} description={item.description} id={item.id} navigation={navigation}/>
    
    useEffect(() => {
        const projectsRef = collection(db, `users/${uid}/projects`)
        const unsubscribe = onSnapshot(projectsRef, (snapshot) => {
          const newProjects = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProjects(newProjects);
        });
        return () => unsubscribe();
      }, [uid]);
    
    return (
        <SafeAreaView className="w-full h-screen bg-zinc-950">
            <View className="w-full">
            {projects ? ( 
                <View className="space-y-2 w-full pt-10">
                    {
                        projects.length === 0 ? (
                            <View className="flex flex-col justify-center items-center">
                                <Text className="text-lg text-gray-500 font-bold pt-20">You don't have any projects yet</Text>
                            </View>
                        ) : (
                            <FlatList
                                data={projects}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />
                        )
                    }
                </View>
            ) : (
                <View className="flex flex-col justify-center items-center">
                    <Text className="text-lg text-gray-500 font-bold pt-20">...</Text>
                </View>
            )}
            </View>
        </SafeAreaView>
    )
}

export default Projects