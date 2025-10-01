import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface MenuItemProps {
  icon: LucideIcon;
  title: string;
  onPress: () => void;
  showBorder?: boolean;
  isDanger?: boolean;
}

export const MenuItem = ({ 
  icon: Icon, 
  title, 
  onPress, 
  showBorder = true,
  isDanger = false 
}: MenuItemProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className={`bg-white px-4 py-4 flex-row items-center ${showBorder ? 'border-b border-gray-200' : ''}`}
    >
      <Icon size={24} color={isDanger ? "#ef4444" : "#000"} strokeWidth={1.5} />
      <Text className={`text-base ml-3 flex-1 ${isDanger ? 'text-red-500' : 'text-black'}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};