import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="get-started" />
      <Stack.Screen name="enable-notifications" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}