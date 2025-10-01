import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Edit } from 'lucide-react-native';

interface ProfileHeaderProps {
  name: string;
  email: string;
  onAddVehicle: () => void;
  onEditProfile: () => void;
}

export const ProfileHeader = ({ name, email, onAddVehicle, onEditProfile }: ProfileHeaderProps) => {
  return (
    <View className="bg-white px-4 py-6 border-b border-gray-200">
      <View className="flex-row items-center">
        {/* Avatar */}
        <View className="w-20 h-20 rounded-full bg-orange-200 border-4 border-gray-300 items-center justify-center">
          <View className="w-16 h-16 rounded-full bg-orange-300 items-center justify-center">
            <View className="w-8 h-8 rounded-full bg-orange-400 mb-2" />
            <View className="w-12 h-6 rounded-t-full bg-orange-400" />
          </View>
        </View>
        
        {/* User Info */}
        <View className="flex-1 ml-4">
          <Text className="text-black text-xl font-semibold" style={{ fontFamily: 'LeagueSpartan-SemiBold' }}>
            {name}
          </Text>
          <Text className="text-gray-600 text-sm mt-1">{email}</Text>
          <TouchableOpacity onPress={onAddVehicle}>
            <Text className="text-lime-500 text-sm font-medium mt-1">Add vehicle</Text>
          </TouchableOpacity>
        </View>
        
        {/* Edit Button */}
        <TouchableOpacity onPress={onEditProfile} className="w-10 h-10 items-center justify-center">
          <Edit size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};