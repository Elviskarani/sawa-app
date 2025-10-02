import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface FilterButtonProps {
  onPress?: () => void; // Made optional since we're handling navigation internally
}

export default function FilterButton({ onPress }: FilterButtonProps) {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress(); // Call the prop function if provided
    }
    router.push('/filter-modal'); // Navigate to filter modal
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="bg-white rounded-full border shadow-lg p-3 ml-2"
      activeOpacity={0.7}
    >
      <Ionicons name="options-outline" size={24} color="#333" />
    </TouchableOpacity>
  );
}