// app/location-details.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Clock, MapPin, Zap } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function LocationDetailsScreen() {
  const params = useLocalSearchParams();
  const latitude = typeof params.latitude === 'string' ? parseFloat(params.latitude) : 0;
  const longitude = typeof params.longitude === 'string' ? parseFloat(params.longitude) : 0;

  const [locationName, setLocationName] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [parkingLevel, setParkingLevel] = useState('');
  const [hours, setHours] = useState('');
  const [price, setPrice] = useState('');
  const [selectedChargers, setSelectedChargers] = useState<string[]>([]);
  const [showChargerGrid, setShowChargerGrid] = useState(false);
  
  const [restrictedAccess, setRestrictedAccess] = useState(false);
  const [nonOperational, setNonOperational] = useState(false);
  const [open24_7, setOpen24_7] = useState(false);
  const [paymentRequired, setPaymentRequired] = useState(false);

  const chargerOptions = [
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

  const toggleCharger = (id: string) => {
    if (selectedChargers.includes(id)) {
      setSelectedChargers(selectedChargers.filter(c => c !== id));
    } else {
      setSelectedChargers([...selectedChargers, id]);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Submitting location details');
    console.log('Selected chargers:', selectedChargers);
    router.back();
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-minty-lime px-4 py-3 pt-12 flex-row border items-center justify-between">
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3" onPress={() => router.back()}>
            <ArrowLeft color="black" size={24} />
          </TouchableOpacity>
          <Text className="text-black text-lg font-medium">
            Location details
          </Text>
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <Text className="text-black text-base font-semibold">SUBMIT</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Location Name with Icon */}
        <View className="bg-white px-4 py-3">
          <View className="flex-row items-center mb-1">
            <MapPin color="#1e40af" size={20} />
            <TextInput
              className="flex-1 ml-2 text-base"
              placeholder="Location Name"
              placeholderTextColor="#9ca3af"
              value={locationName}
              onChangeText={setLocationName}
            />
          </View>
        </View>

        {/* Full Street Address */}
        <View className="bg-white px-4 py-4 border-t border-gray-200">
          <Text className="text-xs text-gray-500 mb-1">Full Street Address</Text>
          <Text className="text-base text-black">
            {latitude && longitude 
              ? `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
              : 'No location selected'}
          </Text>
        </View>

        {/* Parking Level */}
        <View className="bg-white px-4 py-4 border-t border-gray-200">
          <TextInput
            className="text-base"
            placeholder="Parking Level"
            placeholderTextColor="#9ca3af"
            value={parkingLevel}
            onChangeText={setParkingLevel}
          />
        </View>

        {/* Map Preview */}
        <View className="bg-white px-4 py-4 border-t border-gray-200">
          <View className="h-40 rounded-lg overflow-hidden border border-gray-300">
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: latitude || -1.2921,
                longitude: longitude || 36.8219,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              scrollEnabled={false}
              zoomEnabled={false}
              pitchEnabled={false}
              rotateEnabled={false}
            >
              <Marker
                coordinate={{
                  latitude: latitude || -1.2921,
                  longitude: longitude || 36.8219,
                }}
              />
            </MapView>
          </View>
        </View>

        {/* Description */}
        <View className="bg-white px-4 py-4 border-t border-gray-200">
          <TextInput
            className="text-base"
            placeholder="Description"
            placeholderTextColor="#9ca3af"
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>

        {/* Add Phone Number */}
        <View className="bg-white px-4 py-4 border-t border-gray-200">
          <TextInput
            className="text-base"
            placeholder="Add Phone Number"
            placeholderTextColor="#9ca3af"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        {/* Hours Section */}
        <View className="bg-white px-4 py-3 mt-3">
          <View className="flex-row items-center mb-3">
            <Clock color="#1e40af" size={20} />
            <TextInput
              className="flex-1 ml-2 text-base"
              placeholder="Hours"
              placeholderTextColor="#9ca3af"
              value={hours}
              onChangeText={setHours}
            />
          </View>
        </View>

        {/* Open 24/7 Toggle */}
        <View className="bg-white px-4 py-4 border-t border-gray-200 flex-row justify-between items-center">
          <Text className="text-base text-black">Open 24/7</Text>
          <Switch
            value={open24_7}
            onValueChange={setOpen24_7}
            trackColor={{ false: '#D1D5DB', true: '#c1ff72' }}
            thumbColor={open24_7 ? '#3B82F6' : '#F3F4F6'}
          />
        </View>

        {/* Chargers Section */}
        <View className="bg-white px-4 py-4 mt-4">
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center flex-1">
              <Zap color="#1e40af" size={20} />
              <Text className="ml-2 text-base text-gray-700">Plugs</Text>
            </View>
            
            {/* Display Selected Charger Icons */}
            <View className="flex-row items-center gap-2 flex-wrap" style={{ maxWidth: '60%' }}>
              {selectedChargers.length > 0 ? (
                selectedChargers.map((chargerId) => {
                  const charger = chargerOptions.find(c => c.id === chargerId);
                  if (!charger) return null;
                  return (
                    <View key={chargerId} className="bg-gray-100 rounded-lg p-2">
                      <MaterialCommunityIcons
                        name={charger.icon as keyof typeof MaterialCommunityIcons.glyphMap}
                        size={24}
                        color="#1e40af"
                      />
                    </View>
                  );
                })
              ) : (
                <Text className="text-gray-400 text-sm">None</Text>
              )}
            </View>
          </View>
          
          {/* Add/Edit Charger Button */}
          <TouchableOpacity 
            className="py-2 px-4 bg-gray-100 rounded-lg self-start"
            onPress={() => setShowChargerGrid(!showChargerGrid)}
          >
            <Text className="text-blue-600 font-medium">
              {showChargerGrid ? '- Hide Chargers' : '+ Add Charger Type'}
            </Text>
          </TouchableOpacity>

          {/* Expandable Charger Selection Grid */}
          {showChargerGrid && (
            <View className="mt-4 flex-row flex-wrap gap-3">
              {chargerOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => toggleCharger(option.id)}
                  className="flex-col items-center justify-center py-3 px-2 rounded-lg"
                  style={{
                    width: '30%',
                    backgroundColor: selectedChargers.includes(option.id) ? '#E8F5E9' : '#f3f4f6',
                    borderWidth: selectedChargers.includes(option.id) ? 2 : 0,
                    borderColor: selectedChargers.includes(option.id) ? '#000000' : 'transparent',
                  }}
                >
                  <MaterialCommunityIcons
                    name={option.icon as keyof typeof MaterialCommunityIcons.glyphMap}
                    size={28}
                    color={selectedChargers.includes(option.id) ? '#006400' : '#6b7280'}
                  />
                  <Text 
                    className={`mt-2 font-medium text-center text-xs ${
                      selectedChargers.includes(option.id) ? 'text-gray-800' : 'text-gray-700'
                    }`}
                    numberOfLines={1}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Payment Required Toggle */}
        <View className="bg-white px-4 py-4 border-t border-gray-200 flex-row justify-between items-center">
          <Text className="text-base text-black">Payment Required</Text>
          <Switch
            value={paymentRequired}
            onValueChange={setPaymentRequired}
            trackColor={{ false: '#D1D5DB', true: '#c1ff72' }}
            thumbColor={paymentRequired ? '#3B82F6' : '#F3F4F6'}
          />
        </View>

        {/* Price */}
        <View className="bg-white px-4 py-4 border-t border-gray-200">
          <TextInput
            className="text-base"
            placeholder="Price (Optional)"
            placeholderTextColor="#9ca3af"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
    </View>
  );
}