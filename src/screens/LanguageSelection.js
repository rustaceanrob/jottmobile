import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import LanguageIcon from '../components/LanguageIcon';


const LanguageSelection = ({navigation}) => {
    const languages = ["JavaScript", "TypeScript", 
    "Java", "C#", "Dart", "Python", "Swift", "Kotlin", "Ruby", "Objective-C", "C++",
    "HTML", "CSS", "PHP", "SQL", "Juila", "R", "SAS", "MATLAB", 
    "Haskell", "Scala"] //, "Lisp", "Clojure", "F#", "OCaml", "Erlang",

    const [selectedLanguage, setSelectedLanguage] = useState();

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    }

    const handleNext = () => {
        if (selectedLanguage === '') { return }
        navigation.navigate('FrameworkSelection', {lang: selectedLanguage})
    }

    return (
        <SafeAreaView className="w-full h-screen bg-zinc-950">
            <View className="flex flex-col pt-5 pb-40">
                <View className="flex flex-row justify-between items-center pt-2 pb-5 pl-5 pr-5">
                    <View className="flex flex-row justify-center items-center">
                        <Text className="text-gray-300 font-extrabold pr-2">{selectedLanguage}</Text>
                        <LanguageIcon language={selectedLanguage}/>
                    </View>
                    <TouchableOpacity onPress={handleNext}>
                        <Text className="text-gray-300 font-extrabold">Next</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView  className="space-y-2 px-2 py-2 pl-5 pr-5" showsHorizontalScrollIndicator={true}>
                    {languages.map((language) => (
                    <TouchableOpacity
                        key={language}
                        style={[
                        selectedLanguage === language && {backgroundColor: "#3f3f46"},
                        ]}
                        onPress={() => handleLanguageSelect(language)}>
                        <View className="w-full border border-zinc-800 justify-center items-center pl-2 pr-2">
                            <Text className="text-gray-300 pt-2 pb-2 font-semibold">{language}</Text>
                        </View>
                    </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default LanguageSelection