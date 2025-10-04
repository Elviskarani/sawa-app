// app/add-location-map.tsx
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Search, Layers, Locate } from 'lucide-react-native';
import MapView, { Marker } from 'react-native-maps';

export default function AddLocationMapScreen() {
  const mapRef = useRef(null);
  const markerAnimation = useRef(new Animated.Value(0)).current;
  
  const [region, setRegion] = useState({
    latitude: -1.2921,
    longitude: 36.8219,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [selectedLocation, setSelectedLocation] = useState({
    latitude: -1.2921,
    longitude: 36.8219,
  });

  // Animate marker when map moves
  const handleRegionChangeStart = () => {
    Animated.timing(markerAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleRegionChangeComplete = (newRegion: typeof region) => {
    setRegion(newRegion);
    setSelectedLocation({
      latitude: newRegion.latitude,
      longitude: newRegion.longitude,
    });
    
    Animated.timing(markerAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleNext = () => {
    router.push({
      pathname: '/location-details',
      params: {
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
      },
    });
  };

  const handleMyLocation = () => {
    // You can implement geolocation here
    console.log('Get current location');
  };

  const markerTranslateY = markerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });

  return (
    <View className="flex-1">
      {/* Header */}
      <View className="bg-minty-lime px-4 py-3 pt-12 flex-row items-center border justify-between">
        <View className="flex-row items-center flex-1">
          <TouchableOpacity className="mr-3" onPress={() => router.back()}>
            <ArrowLeft color="black" size={24} />
          </TouchableOpacity>
          <Text className="text-black text-lg font-medium flex-1" numberOfLines={1}>
            Move marker to locati...
          </Text>
        </View>
        <TouchableOpacity onPress={handleNext}>
          <Text className="text-black text-base font-semibold">NEXT</Text>
        </TouchableOpacity>
      </View>

      {/* Map */}
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        initialRegion={region}
        onRegionChangeStart={handleRegionChangeStart}
        onRegionChangeComplete={handleRegionChangeComplete}
        showsUserLocation
        showsMyLocationButton={false}
      />

      {/* Fixed Center Marker */}
      <View className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center pointer-events-none">
        <Animated.View
          style={{
            transform: [{ translateY: markerTranslateY }],
          }}
        >
          <View className="items-center mb-12">
            {/* Location Pin */}
            <View className="items-center">
              {/* Pin Body */}
              <View className="bg-minty-lime rounded-t-full rounded-b-none border w-10 h-10 items-center justify-center shadow-lg">
                <View className="w-4 h-4 bg-white border rounded-full" />
              </View>
              {/* Pin Point */}
              <View 
                className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px]"
                style={{
                  borderLeftColor: 'transparent',
                  borderRightColor: 'transparent',
                  borderTopColor: '#c1ff72',
                }}
              />
            </View>
            {/* Pin Shadow */}
            <View className="w-3 h-1.5 bg-black/20 rounded-full mt-1" />
          </View>
        </Animated.View>
      </View>

      {/* Bottom Controls */}
      <View className="absolute bottom-0 left-0 right-0">
        {/* Search Bar */}
        <View className="mx-4 mb-4 bg-white rounded-lg border shadow-lg">
          <TouchableOpacity className="flex-row items-center px-4 py-4">
            <Search color="#000000" size={24} />
            <Text className="ml-3 text-base text-gray-600">
              SEARCH FOR AN ADDRESS OR PLACE
            </Text>
          </TouchableOpacity>
        </View>

        {/* Map Controls */}
        <View className="absolute right-4 bottom-32 space-y-3">
          <TouchableOpacity className="bg-white rounded-full border p-4 shadow-lg">
            <Layers color="#4b5563" size={24} />
          </TouchableOpacity>
          <View className="h-3" />
          <TouchableOpacity 
            className="bg-white rounded-full border p-4 shadow-lg"
            onPress={handleMyLocation}
          >
            <Locate color="#4b5563" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}