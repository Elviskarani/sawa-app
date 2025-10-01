import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import StationMarker from './StationMarker';

interface MapComponentProps {
  onMarkerPress: (station: ChargingStation) => void;
}

export interface ChargingStation {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
  distance: string;
  plugs: Array<{
    type: string;
    count: number;
  }>;
}

export default function MapComponent({ onMarkerPress }: MapComponentProps) {
  const [region, setRegion] = useState({
    latitude: -1.2921,
    longitude: 36.8219,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

  // Example charging station markers with full data
  const chargingStations: ChargingStation[] = [
    {
      id: 1,
      latitude: -1.2921,
      longitude: 36.8219,
      title: 'Ev chaja Juja',
      distance: '15km',
      plugs: [
        { type: 'Type 2', count: 1 },
        { type: 'CCS2', count: 1 },
      ],
    },
    {
      id: 2,
      latitude: -1.1021,
      longitude: 37.0152,
      title: 'Thika Charging Hub',
      distance: '25km',
      plugs: [
        { type: 'Type 2', count: 2 },
        { type: 'CCS2', count: 1 },
      ],
    },
    {
      id: 3,
      latitude: -0.9947,
      longitude: 36.9597,
      title: 'Ruiru Station',
      distance: '18km',
      plugs: [
        { type: 'CCS2', count: 2 },
      ],
    },
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
          <StationMarker
            key={station.id}
            station={station}
            onPress={() => onMarkerPress(station)}
          />
        ))}
      </MapView>
    </View>
  );
}