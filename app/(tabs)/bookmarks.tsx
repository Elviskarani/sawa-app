import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
  return (
    <SafeAreaView>

    <View>
      <Text className="text-4xl color-green-300"> bookmark</Text>
      <View className="w-54 h-54 bg-blue-500" />
    </View>
    </SafeAreaView>

  )
}
export default HomeScreen