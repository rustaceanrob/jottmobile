import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import LanguageIcon from '../components/LanguageIcon';
import FrameworkIcon from '../components/FrameworkIcon';


const frameworks = ["Angular", "Bootstrap", "Express.js", "Firebase" , "Flutter", "Node.js", "React",
                    "React Native", "Tailwind", "Vue.js", "Gen.jl", "ggplot2", "Flux.jl", "NumPy", 
                    "Pandas", "PyTorch", "Shiny", "StatsModels", "SKLearn", "TensorFlow", "Amazon Web Services",
                    "Microsoft Azure", "DigitalOcean", "Google Cloud Platform", "Heroku", 
                    "Compojure",  "Cocoa Touch", "Catalyst", "CodeIgniter", "Combine", "Cowboy", "Chicago Boss", "Django", "Fable", "Flask", "Grails", "Hibernate",
                     "Hanami", "Ktor", "Ruby on Rails", "Sinatra", "Spring Boot", "Struts", "SwiftUI"]

const FrameworkSelection = ({route, navigation}) => {
    const [selectedFrameworks, setSelectedFrameworks] = useState([]);
    const { lang } = route.params

    const handleFrameworkSelect = (framework) => {
        if (selectedFrameworks.length < 3) {
            setSelectedFrameworks([...selectedFrameworks, framework]);
        }
    };

    const handleFrameworkDeselect = (framework) => {
        setSelectedFrameworks(selectedFrameworks.filter((f) => f !== framework));
    };

    const handleNext = () => {
        navigation.navigate('ProjectSelection', {lang: lang, frameworks: selectedFrameworks})
    }

    return (
        <SafeAreaView className="w-full h-screen bg-zinc-950">
        <View className="flex flex-col pt-5 pb-40">
            <View className="flex flex-row justify-between items-center pt-2 pb-5 pl-5 pr-5">
                <TouchableOpacity className="flex flex-row justify-center items-center" onPress={() => navigation.goBack()}>
                    <Text className="text-gray-300 font-extrabold pr-2">{lang}</Text>
                    <LanguageIcon language={lang}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext}>
                    <Text className="text-gray-300 font-extrabold">Next</Text>
                </TouchableOpacity>
            </View>
            <Text className="text-gray-300 font-extrabold pl-5 pb-2">Select up to 3 references:</Text>
            <ScrollView  className="space-y-2 px-2 py-2 pl-5 pr-5" showsHorizontalScrollIndicator={true}>
                {frameworks.map((framework) => (
                    <TouchableOpacity
                    key={framework}
                    style={[
                        selectedFrameworks.includes(framework) && {backgroundColor: "#3f3f46"}
                    ]}
                    onPress={() =>
                        selectedFrameworks.includes(framework)
                        ? handleFrameworkDeselect(framework)
                        : handleFrameworkSelect(framework)
                    }
                    >
                    <View className="flex flex-row w-full border border-zinc-800 justify-center items-center pl-2 pr-2">
                        <Text className="text-gray-300 pt-2 pb-2 font-semibold pr-2">{framework}</Text>
                        <FrameworkIcon framework={framework}/>
                    </View>
                    </TouchableOpacity>
                ))}
          </ScrollView>
        </View>
    </SafeAreaView>
    )
}

export default FrameworkSelection