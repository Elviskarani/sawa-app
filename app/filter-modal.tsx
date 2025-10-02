import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FilterModal() {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
  const filterOptions = [
    { id: 'ccs1', label: 'CCS1', icon: 'ev-plug-ccs1' },
    { id: 'ccs2', label: 'CCS2', icon: 'ev-plug-ccs2' },
    { id: 'chademo', label: 'CHAdeMO', icon: 'ev-plug-chademo' },
    { id: 'caravan', label: 'Caravan Main...', icon: 'ev-plug-type2' },
    { id: 'commando', label: 'Commando', icon: 'power-socket' },
    { id: 'gbt', label: 'GB/T', icon: 'ev-plug-ccs2' },
    { id: 'gbt-fast', label: 'GB/T (Fast)', icon: 'ev-plug-ccs2' },
    { id: 'j1772', label: 'J-1772', icon: 'ev-plug-type1' },
    { id: 'tesla', label: 'Tesla (Roadst...', icon: 'ev-plug-tesla' },
    { id: 'three-phase', label: 'Three Phase', icon: 'sine-wave' },
    { id: 'type2', label: 'Type 2', icon: 'ev-plug-type2' },
    { id: 'type3', label: 'Type 3', icon: 'power-plug-outline' },
    { id: 'wall', label: 'Wall', icon: 'power-socket-us' },
    { id: 'wall-euro', label: 'Wall (Euro)', icon: 'power-socket-eu' },
  ];

  const toggleFilter = (id: string) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter(f => f !== id));
    } else {
      setSelectedFilters([...selectedFilters, id]);
    }
  };

  const handleApply = () => {
    console.log('Applied filters:', selectedFilters);
    router.back();
  };

  const handleReset = () => {
    setSelectedFilters([]);
  };

  return (
    <View className="flex-1 justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
      {/* Backdrop - closes modal when tapped */}
      <Pressable 
        className="flex-1" 
        onPress={() => router.back()} 
      />
      
      {/* Modal Content */}
      <View className="bg-white rounded-t-2xl border max-h-[85%]">
        <SafeAreaView edges={['bottom']}>
          {/* Header */}
          <View className="flex-row items-center justify-between px-6 pt-6 pb-4 border-b border-gray-200">
            <TouchableOpacity onPress={() => router.back()}>
              <X size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-xl font-semibold">Filters</Text>
            <TouchableOpacity onPress={handleReset}>
              <Text className="text-base font-semibold text-gray-700">RESET</Text>
            </TouchableOpacity>
          </View>

          {/* Filter Options - Grid Layout */}
          <ScrollView className="px-6 py-4" showsVerticalScrollIndicator={false}>
            <Text className="text-base font-semibold mb-4">Vehicles & Plugs</Text>
            
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-base font-medium">Vehicle</Text>
              <TouchableOpacity>
                <Text className="text-green-500 font-medium">Add Vehicle</Text>
              </TouchableOpacity>
            </View>
            
            <View className="flex-row flex-wrap gap-3 mb-6">
              {filterOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => toggleFilter(option.id)}
                  className={`flex-col items-center justify-center py-4 px-2  rounded-lg`}
                  style={{
                    width: '30%',
                    backgroundColor: selectedFilters.includes(option.id) ? '#E8F5E9' : '#f3f4f6',
                    borderWidth: selectedFilters.includes(option.id) ? 2 : 0,
                    borderColor: selectedFilters.includes(option.id) ? '#000000' : 'transparent',
                  }}
                >
                  <MaterialCommunityIcons
                    name={option.icon as any}
                    size={32}
                    color={selectedFilters.includes(option.id) ? '#006400' : '#6b7280'}
                  />
                  <Text 
                    className={`mt-2 font-medium text-center text-xs ${
                      selectedFilters.includes(option.id) ? 'text-gray-800' : 'text-gray-700'
                    }`}
                    numberOfLines={1}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Share Feedback Section */}
            <TouchableOpacity className="py-4 border-t border-gray-200">
              <Text className="text-center text-base font-semibold">Share Feedback</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Footer */}
          <View className="flex-row items-center justify-between px-6 py-4 border-t border-gray-200">
            <Text className="text-base font-semibold">12 locations found</Text>
            <TouchableOpacity
              onPress={handleApply}
              className="px-8 py-2 rounded-full"
              style={{ backgroundColor: '#c8f542' }}
            >
              <Text className="text-center font-bold text-black">VIEW</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}