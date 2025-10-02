import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X } from 'lucide-react-native';

export default function FilterModal() {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterOptions = [
    { id: 'fast', label: 'Fast Charging' },
    { id: 'available', label: 'Available Now' },
    { id: 'free', label: 'Free' },
    { id: 'type2', label: 'Type 2' },
    { id: 'ccs', label: 'CCS' },
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
      
      {/* Modal Content - takes only part of screen */}
      <View className="bg-white rounded-t-2xl border max-h-[85%]">
        <SafeAreaView edges={['bottom']}>
          {/* Header */}
          <View className="flex-row items-center justify-between px-6 pt-6 pb-4">
            <Text className="text-xl font-semibold">Filters</Text>
            <TouchableOpacity onPress={() => router.back()}>
              <X size={24} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Filter Options */}
          <ScrollView className="px-6 py-2" showsVerticalScrollIndicator={false}>
            <Text className="text-sm font-semibold text-gray-600 mb-3">CHARGER TYPE</Text>
            
            {filterOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => toggleFilter(option.id)}
                className={`p-4 mb-2 rounded-lg border ${
                  selectedFilters.includes(option.id)
                    ? 'bg-green-50 border-green-500'
                    : 'bg-white border-gray-200'
                }`}
              >
                <Text
                  className={`font-medium ${
                    selectedFilters.includes(option.id) ? 'text-green-700' : 'text-gray-700'
                  }`}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Footer Buttons */}
          <View className="flex-row px-6 py-4 gap-3">
            <TouchableOpacity
              onPress={handleReset}
              className="flex-1 py-3 rounded-lg border border-gray-300"
            >
              <Text className="text-center font-semibold text-gray-700">Reset</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={handleApply}
              className="flex-1 py-3 rounded-lg bg-green-600"
            >
              <Text className="text-center font-semibold text-white">Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}