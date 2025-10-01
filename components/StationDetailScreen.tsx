import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function StationDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // In a real app, you would fetch this data based on params.id
  const station = {
    id: params.id,
    title: 'Ev chaja Juja',
    distance: '15km',
    plugs: [
      { type: 'CCS2', count: 1, power: 'Kilowatt' },
      { type: 'Type 2', count: 1, power: 'Kilowatt' },
    ],
    address: 'Juja, Kenya',
    rating: 4.5,
    reviews: 23,
  };

  return (
    <SafeAreaView className="flex-1 bg-[#E8F5E9]">
      <ScrollView className="flex-1">
        {/* Header with back button */}
        <View className="px-4 pt-4 pb-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-white rounded-full p-2 w-10 h-10 items-center justify-center"
            style={{
              borderWidth: 1,
              borderColor: '#000000',
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Add Photo Section */}
        <View className="items-center mb-6">
          <View 
            className="bg-white rounded-lg p-8 items-center justify-center"
            style={{
              borderWidth: 1,
              borderColor: '#D1D5DB',
            }}
          >
            <Ionicons name="camera-outline" size={64} color="#10b981" />
            <Text className="text-base font-semibold mt-4">Add Photo</Text>
          </View>
        </View>

        {/* Bookmark button */}
        <View className="absolute right-4 top-20">
          <TouchableOpacity
            className="bg-white rounded-full p-3"
            style={{
              borderWidth: 1,
              borderColor: '#000000',
            }}
          >
            <Ionicons name="bookmark-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Station Info Card */}
        <View 
          className="mx-4 bg-white rounded-3xl p-6 mb-4"
          style={{
            borderWidth: 1,
            borderColor: '#000000',
          }}
        >
          <Text className="text-2xl font-bold text-gray-900 mb-1">
            {station.title}
          </Text>
          <Text className="text-sm text-gray-600 mb-4">
            Distance {station.distance}
          </Text>

          {/* Action Buttons */}
          <View className="flex-row justify-between mb-6">
            <ActionButton
              icon="camera-outline"
              label="Add Photo"
              color="#10b981"
            />
            <ActionButton
              icon="navigate-outline"
              label="Directions"
              color="#10b981"
            />
            <ActionButton
              icon="share-social-outline"
              label="Share"
              color="#10b981"
            />
            <ActionButton
              icon="warning-outline"
              label="Report"
              color="#10b981"
            />
          </View>

          {/* Plugs Section */}
          <Text className="text-lg font-bold text-gray-900 mb-3">Plugs</Text>

          {station.plugs.map((plug, index) => (
            <View 
              key={index} 
              className="mb-4 p-3 rounded-lg"
              style={{
                borderWidth: 1,
                borderColor: '#0000000',
              }}
            >
              <View className="flex-row items-center mb-2">
                <Text className="font-semibold text-gray-900">
                  {plug.type}
                </Text>
                <Text className="text-gray-600 ml-2">{plug.count} Charger</Text>
              </View>
              <View className="flex-row items-center ml-4">
                <Ionicons name="flash" size={16} color="#10b981" />
                <Text className="text-gray-700 ml-2">
                  {plug.count} Plug
                </Text>
              </View>
              <Text className="text-gray-600 ml-10">{plug.power}</Text>
            </View>
          ))}

          {/* View Chargers Link */}
          <TouchableOpacity className="flex-row items-center mt-2">
            <Text className="text-blue-600 font-medium">View Chargers</Text>
            <Ionicons name="arrow-forward" size={16} color="#2563eb" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Check In Button */}
      <View className="px-4 pb-4 bg-transparent">
        <TouchableOpacity 
          className="bg-minty-lime rounded-lg py-4 px-8 items-center"
          style={{
            borderWidth: 1,
            borderColor: '#000000',
          }}
        >
          <Text className="text-gray-900 font-bold text-lg">CHECK IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

interface ActionButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  color: string;
}

function ActionButton({ icon, label, color }: ActionButtonProps) {
  return (
    <TouchableOpacity className="items-center">
      <View
        className="bg-[#E8F5E9] rounded-full p-3 mb-2"
        style={{ 
          width: 56, 
          height: 56, 
          justifyContent: 'center', 
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#000000',
        }}
      >
        <Ionicons name={icon} size={24} color={color} />
      </View>
      <Text className="text-xs text-gray-700 text-center" style={{ width: 60 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}