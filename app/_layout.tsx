import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="station-detail" />
      <Stack.Screen 
    name="filter-modal" 
    options={{ 
      presentation: 'transparentModal',
      animation: 'slide_from_bottom',
      contentStyle: { backgroundColor: 'transparent' }
    }} 
  />
    </Stack>
  );
}