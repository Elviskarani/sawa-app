import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import CheckInModal from '@/components/CheckInModal';

export default function StationDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [showCheckInModal, setShowCheckInModal] = useState(false);

  // Map plug types to their corresponding icons
  const plugIconMap: Record<string, string> = {
    'CCS1': 'ev-plug-ccs1',
    'CCS2': 'ev-plug-ccs2',
    'CHAdeMO': 'ev-plug-chademo',
    'Type 2': 'ev-plug-type2',
    'Type 3': 'power-plug-outline',
    'J-1772': 'ev-plug-type1',
    'Tesla': 'ev-plug-tesla',
    'GB/T': 'ev-plug-ccs2',
    'Wall': 'power-socket-us',
    'Wall (Euro)': 'power-socket-eu',
  };

  // In a real app, you would fetch this data based on params.id
  const station = {
    id: params.id,
    title: 'Ev chaja Juja',
    distance: '15km',
    plugs: [
      { type: 'CCS2', count: 1, chargers: 1, power: 'Kilowatt' },
      { type: 'Type 2', count: 1, chargers: 1, power: 'Kilowatt' },
    ],
  };

  const handleCheckIn = () => {
    setShowCheckInModal(true);
  };

  const handleSelectStatus = (status: string) => {
    console.log('Selected status:', status);
    // Handle the selected status here (e.g., save to backend, show confirmation, etc.)
  };

  return (
    <View className="flex-1 bg-[#E8F5E9]">
      <SafeAreaView edges={['top']} className="flex-1">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Header with back button */}
          <View className="px-4 pt-2 pb-6 flex-row justify-between items-start">
            <TouchableOpacity
              onPress={() => router.back()}
              className="bg-white rounded-full border  p-2 w-10 h-10 items-center justify-center"
            >
              <Ionicons name="arrow-back" size={20} color="#000" />
            </TouchableOpacity>

            {/* Bookmark button */}
            <TouchableOpacity
              className="bg-white rounded-full border p-3"
            >
              <Ionicons name="bookmark-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Add Photo Section */}
          <View className="items-center mb-6 px-4">
            <TouchableOpacity 
              className="bg-white rounded-lg border p-12 items-center justify-center w-full"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 3,
                elevation: 2,
              }}
            >
              <View className="items-center">
                <View className="bg-gray-100 rounded-full p-4 mb-3">
                  <Ionicons name="camera-outline" size={32} color="#10b981" />
                  <View className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                    <Ionicons name="add-circle" size={20} color="#10b981" />
                  </View>
                </View>
                <Text className="text-base font-semibold text-gray-900">Add Photo</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Station Info Card */}
          <View className="mx-4 bg-white rounded-lg border p-6 mb-3">
            <Text className="text-2xl font-bold text-gray-900 mb-1">
              {station.title}
            </Text>
            <Text className="text-sm text-gray-600 mb-6">
              Distance {station.distance}
            </Text>

            {/* Action Buttons */}
            <View className="flex-row justify-between mb-6">
              <ActionButton
                icon="camera-outline"
                label="Add Photo"
              />
              <ActionButton
                icon="navigate-outline"
                label="Directions"
              />
              <ActionButton
                icon="share-social-outline"
                label="Share"
              />
              <ActionButton
                icon="warning-outline"
                label="Report"
              />
            </View>

            {/* Plugs Section */}
            <Text className="text-lg font-bold text-gray-900 mb-4">Plugs</Text>

            {station.plugs.map((plug, index) => (
              <View key={index} className="mb-4">
                <View className="flex-row items-center justify-between mb-2">
                  <View className="flex-row items-center flex-1">
                    {/* Plug Icon */}
                    <View className="bg-[#E8F5E9] border rounded-2xl p-2 mr-3">
                      <MaterialCommunityIcons
                        name={plugIconMap[plug.type] as keyof typeof MaterialCommunityIcons.glyphMap}
                        size={32}
                        color="#6b7280"
                      />
                    </View>
                    <View>
                      <Text className="font-semibold text-gray-900 text-base">
                        {plug.type}
                      </Text>
                      <Text className="text-gray-600 text-sm">
                        {plug.chargers} Charger
                      </Text>
                    </View>
                  </View>
                  <Text className="font-semibold text-gray-900">1 plug</Text>
                </View>
                
                <View className="flex-row items-center ml-1 mt-1">
                  <Ionicons name="flash" size={18} color="#10b981" />
                  <Text className="text-gray-700 ml-2 text-sm">
                    {plug.count} Plug
                  </Text>
                </View>
                <Text className="text-gray-600 ml-7 text-sm">{plug.power}</Text>
                
                {index < station.plugs.length - 1 && (
                  <View className="h-px bg-gray-200 mt-4" />
                )}
              </View>
            ))}
          </View>

          {/* Bottom spacing */}
          <View className="h-24" />
        </ScrollView>

        {/* Check In Button - Fixed at bottom */}
        <View className="px-4 pb-4 bg-transparent">
          <TouchableOpacity 
            className="bg-minty-lime border rounded-lg py-4 items-center"
            onPress={handleCheckIn}
          >
            <Text className="text-gray-900 font-bold text-lg">CHECK IN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Check In Modal */}
      <CheckInModal
        visible={showCheckInModal}
        onClose={() => setShowCheckInModal(false)}
        onSelectStatus={handleSelectStatus}
      />
    </View>
  );
}

interface ActionButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <TouchableOpacity className="items-center flex-1">
      <View
        className="bg-[#E8F5E9] rounded-full border p-3 mb-2"
        style={{ width: 52, height: 52, justifyContent: 'center', alignItems: 'center' }}
      >
        <Ionicons name={icon} size={22} color="#10b981" />
      </View>
      <Text className="text-xs text-gray-700 text-center" numberOfLines={2} style={{ width: 70 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}