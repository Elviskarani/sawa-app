import React from 'react';
import { View, Text } from 'react-native';

export const Footer = () => {
  return (
    <View className="bg-white px-4 py-8 items-center">
      <View className="flex-row items-center">
        <View className="w-5 h-5 rounded-full border-2 border-black items-center justify-center mr-2">
          <Text className="text-black text-xs font-bold">©</Text>
        </View>
        <Text className="text-black text-sm">2025 sawacharge</Text>
      </View>
    </View>
  );
};