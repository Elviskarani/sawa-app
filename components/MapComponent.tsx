import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapComponent() {
  const [region, setRegion] = useState({
    latitude: -1.2921,
    longitude: 36.8219,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

  // Example charging station markers
  const chargingStations = [
    { id: 1, latitude: -1.2921, longitude: 36.8219, title: 'Thika Station' },
    { id: 2, latitude: -1.1021, longitude: 37.0152, title: 'Juja Station' },
    { id: 3, latitude: -0.9947, longitude: 36.9597, title: 'Ruiru Station' },
  ];

  return (
    <View className="flex-1">
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
        showsUserLocation
        showsMyLocationButton={false}
        showsCompass={false}
      >
        {chargingStations.map((station) => (
          <Marker
            key={station.id}
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude,
            }}
            title={station.title}
          />
        ))}
      </MapView>
    </View>
  );
}