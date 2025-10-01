import React, { useState } from 'react';
import { View , StatusBar } from 'react-native';
import MapComponent from '@/components/MapComponent';
import SearchBar from '@/components/SearchBar';
import FilterButton from '@/components/FilterButton';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Map() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
    // Implement your search logic here
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
    console.log('Filter toggled');
    // Implement your filter logic here
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-1">
        {/* Map Component - Takes full screen */}
        <MapComponent />

        {/* Search Bar - Positioned at top */}
        <View className="absolute top-4 left-4 right-4 z-10">
          <SearchBar 
            onSearch={handleSearch}
            placeholder="search by city, addr, charger type"
          />
        </View>

        {/* Filter Button - Positioned at bottom right of search */}
        <View className="absolute top-4 right-4 z-20">
          <FilterButton onPress={handleFilter} />
        </View>

        {/* Location/Center Button - Positioned at right side */}
        <View className="absolute right-4 bottom-32 z-10">
          {/* This would be your center/locate button */}
        </View>
      </View>
    </SafeAreaView>
  );
}