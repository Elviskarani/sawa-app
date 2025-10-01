import { Redirect } from 'expo-router';

export default function Index() {
  // For now, always redirect to auth
  // Later you'll check if user is logged in
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/splash" />;
}