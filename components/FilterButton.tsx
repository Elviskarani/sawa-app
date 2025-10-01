import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FilterButtonProps {
  onPress: () => void;
}

export default function FilterButton({ onPress }: FilterButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-full shadow-lg p-3 ml-2"
      activeOpacity={0.7}
    >
      <Ionicons name="options-outline" size={24} color="#333" />
    </TouchableOpacity>
  );
}