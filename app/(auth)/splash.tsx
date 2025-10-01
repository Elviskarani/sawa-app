import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

const appLogo = require('../../assets/images/applogo1.png')

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Auto navigate after 2 seconds
    const timer = setTimeout(() => {
      router.push('/(auth)/get-started');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-minty-lime">
      <View className="flex-1 items-center justify-start pt-32">
        <Image
          source={appLogo}
          className="w-40 h-40 mb-4"
        />
        <Text 
          className="text-deep-slate text-2xl font-bold" 
          style={{ fontFamily: 'LeagueSpartan-Regular' }}
        >
          SAWA CHARGE
        </Text>
      </View>
    </SafeAreaView>
  );
}