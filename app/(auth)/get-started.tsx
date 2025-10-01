import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin,MapPinned, MessagesSquare, CarFront } from 'lucide-react-native';

const appLogo = require('../../assets/images/applogo1.png');

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-minty-lime">
      <View className="flex-1 px-5 pt-8">
        {/* Logo */}
        <View className="items-center justify-start pt-10">
          <Image
            source={appLogo}
            className="w-40 h-40 mb-5"
          />
          <Text className="text-2xl font-bold text-deep-slate text-center" style={{ fontFamily: 'LeagueSpartan-Bold' }}>
            Welcome to Sawa Charge
          </Text>
        </View>

        {/* Description */}
        <Text className="text-lg text-deep-slate font-bold text-center mb-8 mt-8 px-4" style={{ fontFamily: 'LeagueSpartan-Regular' }}>
          Join the Kenyan community of EV drivers{'\n'}
          and explore our great features
        </Text>

        {/* Features List */}
        <View className="space-y-6 mt-5 mb-8">
          {/* Feature 1 */}
          <View className="flex-row items-start gap-4">
            <MapPinned size={28} color="#000000" strokeWidth={2} className="mr-8" />
            <Text className="text-base font-semibold text-black flex-1" style={{ fontFamily: 'LeagueSpartan-Regular' }}>
              Find charging location that match your vehicle and preferences
            </Text>
          </View>

          {/* Feature 2 */}
          <View className="flex-row items-start mt-6 gap-4">
            <MessagesSquare size={28} color="#000000" strokeWidth={2} className="mr-5" />
            <Text className="text-base font-semibold text-black flex-1" style={{ fontFamily: 'LeagueSpartan-Regular' }}>
              Check in and share your experience with the community
            </Text>
          </View>

          {/* Feature 3 */}
          <View className="flex-row items-start mt-6 gap-4">
            <CarFront size={28} color="#000000" strokeWidth={2} className="mr-5" />
            <Text className="text-base font-semibold text-black flex-1" style={{ fontFamily: 'LeagueSpartan-Regular' }}>
              Plan and save trips for your longer drives
            </Text>
          </View>
        </View>
      </View>

      {/* Bottom Button */}
      <View className="px-6 pb-8">
        <TouchableOpacity
          onPress={() => router.push('/(auth)/enable-notifications')}
          className="bg-[#ffffff] border rounded-2xl py-2"
        >
          <Text className="text-deep-slate text-center font-semibold text-lg" style={{ fontFamily: 'LeagueSpartan-SemiBold' }}>
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}