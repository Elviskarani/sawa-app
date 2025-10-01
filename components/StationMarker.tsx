import React from 'react';
import { Marker } from 'react-native-maps';

interface StationMarkerProps {
  station: {
    id: number;
    latitude: number;
    longitude: number;
    title: string;
  };
  onPress: () => void;
}

export default function StationMarker({ station, onPress }: StationMarkerProps) {
  return (
    <Marker
      key={station.id}
      coordinate={{
        latitude: station.latitude,
        longitude: station.longitude,
      }}
      title={station.title}
      onPress={onPress}
    />
  );
}