import React from 'react';
import { View, Text } from 'react-native';

interface MenuSectionHeaderProps {
  title: string;
}

export const MenuSectionHeader = ({ title }: MenuSectionHeaderProps) => {
  return (
    <View className="bg-gray-100 px-4 py-2">
      <Text className="text-gray-700 text-xs font-semibold uppercase tracking-wider">
        {title}
      </Text>
    </View>
  );
};