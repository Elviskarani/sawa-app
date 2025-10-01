import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StationCardProps {
  station: {
    id: number;
    title: string;
    distance: string;
    plugs: Array<{
      type: string;
      count: number;
    }>;
  };
  onPress: () => void;
  onClose: () => void;
}

export default function StationCard({ station, onPress, onClose }: StationCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white rounded-lg border shadow-lg mx-4 mb-4"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      }}
    >
      <View className="p-4">
        {/* Header with title and close button */}
        <View className="flex-row justify-between items-start mb-2">
          <View className="flex-1">
            <Text className="text-xl font-bold text-gray-900">
              {station.title}
            </Text>
            <Text className="text-sm text-gray-600 mt-1">
              Distance {station.distance}
            </Text>
          </View>
          <TouchableOpacity
            onPress={onClose}
            className="p-2"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="close" size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        {/* Plugs information */}
        <View className="mt-3 border-t border-gray-200 pt-3">
          {station.plugs.map((plug, index) => (
            <View key={index} className="flex-row justify-between items-center mb-2">
              <Text className="text-sm text-gray-700">
                {plug.type}
              </Text>
              <Text className="text-sm text-gray-700 font-medium">
                {plug.count} plug{plug.count > 1 ? 's' : ''}
              </Text>
            </View>
          ))}
        </View>

        {/* Tap to view details hint */}
        <View className="mt-2 pt-2 border-t border-gray-100">
          <Text className="text-xs text-gray-500 text-center">
            Tap to view details
          </Text>
        </View>
      </View>
    </Pressable>
  );
}