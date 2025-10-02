import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function TripsScreen() {
  return (
      <SafeAreaProvider>
   <SafeAreaView className="flex-1" edges={['top','left','right']}>
    <View className="flex-1 bg-lime-300">
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#d9f99d" 
        translucent={false}
      />
        {/* Header */}
        <View className="bg-lime-300 px-4 py-4">
          <Text className="text-black text-3xl font-semibold"style={{ fontFamily: 'LeagueSpartan-SemiBold' }}>Trips</Text>
        </View>
        
        {/* Content Area */}
        <ScrollView className="flex-1 bg-white">
          <View className="flex-1 items-center justify-center px-8 py-20">
            <Text className="text-gray-400 text-center text-base" style={{ fontFamily: 'LeagueSpartan-Regular' }}>
              Your trips planned in sawacharge.carsawa.africa will appear here
            </Text>
          </View>
        </ScrollView>
    </View>
      </SafeAreaView>
      </SafeAreaProvider>
  );
}