import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddvehicleScreen() {
  return (
    <View className="flex-1 bg-lime-300 ">
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#d9f99d" 
        translucent={false}
      />
      
      <SafeAreaView className="flex-1" edges={['top']}>
        {/* Header */}
        <View className="bg-lime-300 px-4 border-b py-4">
          <Text className="text-black text-3xl font-semibold"style={{ fontFamily: 'LeagueSpartan-SemiBold' }}>Add your Vehicle</Text>
        </View>
        
        {/* Content Area */}
        <ScrollView className="flex-1 bg-white">
         
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}