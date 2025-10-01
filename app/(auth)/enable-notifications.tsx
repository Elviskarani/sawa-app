import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Bell } from 'lucide-react-native';

export default function EnableNotificationsScreen() {
  const router = useRouter();

  const handleEnable = () => {
    // Request notification permissions here
    router.push('/(auth)/join');
  };

  const handleSkip = () => {
    router.push('/(auth)/join');
  };

  return (
    <SafeAreaView className="flex-1 bg-minty-lime">
      <View className="flex-1 px-8">
        {/* Decorative Elements */}
        <View className="absolute top-36 left-8">
          <Text className="text-gray-800 text-2xl">☆</Text>
        </View>
        <View className="absolute top-45 left-6">
          <Text className="text-gray-800 text-xl">☆</Text>
        </View>
        <View className="absolute top-52 left-4">
          <Text className="text-gray-800 text-lg">☆</Text>
        </View>
        <View className="absolute top-32 right-8">
          <Text className="text-gray-800 text-lg">☆</Text>
        </View>
        <View className="absolute top-12 left-32">
          <View className="w-6 h-6 border-2 border-gray-800 rounded-full" />
        </View>
        <View className="absolute top-12 right-12">
          <View className="w-4 h-4 border-2 border-purple-500 rounded-full" />
        </View>
        <View className="absolute top-60 left-32">
          <View className="w-5 h-5 border-2 border-gray-800 rounded-full" />
        </View>

        {/* Content */}
        <View className="flex-1 items-center justify-center ">
          {/* Bell Icon with Notification Badge */}
          <View className="relative mb-12">
            <View className="w-48 h-48 border-[3px] border-gray-900 rounded-full items-center justify-center">
              <View className="items-center">
                <Bell size={64} color="#000" strokeWidth={2} />
                {/* Notification waves */}
                <View className="absolute -left-4">
                  <View className="w-8 h-1 bg-gray-900 rounded-full rotate-[-50deg] mb-1" />
                  <View className="w-8 h-1 bg-gray-900 rounded-full rotate-[-50deg] ml-1" />
                </View>
                <View className="absolute -right-4">
                  <View className="w-8 h-1 bg-gray-900 rounded-full rotate-[30deg] mb-1" />
                  <View className="w-6 h-1 bg-gray-900 rounded-full rotate-[30deg] mr-1" />
                </View>
              </View>
            </View>
            {/* Notification badge */}
            <View className="absolute top-3 right-1 w-12 h-12 bg-minty-lime border-[3px] border-gray-900 rounded-full items-center justify-center">
              <Text className="text-gray-900 font-bold text-lg">1</Text>
            </View>
          </View>

          <Text className="text-lg font-bold text-deep-slate text-center leading-tight px-4"  style={{ fontFamily: 'LeagueSpartan-Regular' }}>
            Stay informed about new locations and stations you follow
          </Text>

          <Text className="text-sm text-gray-900 text-center mt-6 px-4"  style={{ fontFamily: 'LeagueSpartan-Regular' }}>
            We'll notify you when there are new features and any changes to Sawacharge
          </Text>
        </View>

        {/* Bottom Buttons */}
        <View className="pb-8 gap-3">
          <TouchableOpacity
            onPress={handleEnable}
            className="bg-[#ffffff] border rounded-2xl py-2"
          >
            <Text className="text-deep-slate text-center font-semibold text-lg tracking-wide"  style={{ fontFamily: 'LeagueSpartan-Regular' }}>
              ENABLE NOTIFICATION
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleSkip}>
            <Text className="text-deep-slate text-center font-semibold text-lg"  style={{ fontFamily: 'LeagueSpartan-Regular' }}>
              ASK ME LATER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}