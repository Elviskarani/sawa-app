import FilterButton from '@/components/FilterButton';
import MapComponent, { ChargingStation } from '@/components/MapComponent';
import SearchBar from '@/components/SearchBar';
import StationCard from '@/components/StationCard';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, Keyboard, KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Map() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [selectedStation, setSelectedStation] = useState<ChargingStation | null>(null);
  const cardAnimation = useState(new Animated.Value(300))[0];

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

  // Animate card in/out
  useEffect(() => {
    if (selectedStation) {
      Animated.spring(cardAnimation, {
        toValue: 0,
        useNativeDriver: true,
        tension: 50,
        friction: 8,
      }).start();
    } else {
      Animated.spring(cardAnimation, {
        toValue: 300,
        useNativeDriver: true,
        tension: 50,
        friction: 8,
      }).start();
    }
  }, [selectedStation]);

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

  const handleMarkerPress = (station: ChargingStation) => {
    setSelectedStation(station);
  };

  const handleCardPress = () => {
    if (selectedStation) {
      // Navigate to detail screen
      router.push({
        pathname: '/station-detail',
        params: { id: selectedStation.id }
      });
    }
  };

  const handleCloseCard = () => {
    setSelectedStation(null);
  };

  return ( 
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" edges={['top','left','right']}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <StatusBar barStyle="dark-content" />
      <View className="flex-1">
        {/* Map Component - Takes full screen */}
        <MapComponent onMarkerPress={handleMarkerPress} />
        
        {/* Station Card - Animated from bottom */}
        {selectedStation && !isKeyboardVisible && (
          <Animated.View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              transform: [{ translateY: cardAnimation }],
              zIndex: 20,
            }}
          >
            <StationCard
              station={selectedStation}
              onPress={handleCardPress}
              onClose={handleCloseCard}
            />
          </Animated.View>
        )}
        
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
              : { bottom: selectedStation ? 200 : 0 }
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
    </SafeAreaView>
    </SafeAreaProvider>
  );
}