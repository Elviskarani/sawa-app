import FilterButton from '@/components/FilterButton';
import MapComponent from '@/components/MapComponent';
import SearchBar from '@/components/SearchBar';
import React, { useEffect, useState } from 'react';
import { Animated, Keyboard, KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Map() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        setIsKeyboardVisible(true);
      }
    );

    const keyboardWillHide = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      }
    );

    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, []);

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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <StatusBar barStyle="dark-content" />
      <View className="flex-1">
        {/* Map Component - Takes full screen */}
        <MapComponent />
        
        {/* Search Bar and Filter Button - Animated position */}
        <Animated.View 
          style={[
            {
              position: 'absolute',
              left: 0,
              right: 0,
              zIndex: 10,
            },
            isKeyboardVisible
              ? { top: 0 }
              : { bottom: 0 }
          ]}
        >
          <SafeAreaView edges={isKeyboardVisible ? ['top'] : ['bottom']} className="bg-transparent">
            <View className="flex-row items-center px-4 py-4">
              {/* Search Bar - Takes most of the width */}
              <View className="flex-1">
                <SearchBar 
                  onSearch={handleSearch}
                  placeholder="search by city, addr, charger type"
                />
              </View>
              
              {/* Filter Button - Fixed width next to search */}
              <FilterButton onPress={handleFilter} />
            </View>
          </SafeAreaView>
        </Animated.View>
        
        {/* Location/Center Button - Positioned above the search bar */}
        {!isKeyboardVisible && (
          <View className="absolute right-4 bottom-32 z-10">
            {/* This would be your center/locate button */}
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}