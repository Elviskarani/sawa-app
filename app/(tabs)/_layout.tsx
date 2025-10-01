import { Tabs } from 'expo-router';
import React from 'react';
import { Map, Car, Bookmark, User } from 'lucide-react-native';

import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#50C878', // dark green
        tabBarInactiveTintColor: '#000000', // black
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
        },
      }}>
      <Tabs.Screen
        name="maps"
        options={{
          title: 'Maps',
          tabBarIcon: ({ color }) => <Map size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: 'Trips',
          tabBarIcon: ({ color }) => <Car size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({ color }) => <Bookmark size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}