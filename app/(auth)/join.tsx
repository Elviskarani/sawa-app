import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { X, Mail } from 'lucide-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function JoinScreen() {
  const router = useRouter();

  const handleGoogleSignUp = () => {
    // Handle Google sign up
  };

  const handleAppleSignUp = () => {
    // Handle Apple sign up
  };

  const handleEmailSignUp = () => {
    // Navigate to email sign up
    router.push('/(auth)/signup');
  };

  const handleSignIn = () => {
    // Navigate to sign in
    router.push('/(auth)/signin');
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <View className="flex-1 px-6">
        {/* Close Button */}
        <View className="pt-4">
          <TouchableOpacity onPress={handleClose} className="w-10">
            <X size={28} color="#000" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="flex-1 justify-center pb-20">
          {/* Title */}
          <Text className="text-3xl font-bold text-deep-slate text-center mb-16">
            Join SawaCharge
          </Text>

          {/* Sign Up Buttons */}
          <View className="gap-3">
            {/* Google Sign Up */}
            <TouchableOpacity
              onPress={handleGoogleSignUp}
              className="bg-gray-900 rounded-2xl py-3 flex-row items-center justify-center"
            >
              <View className="w-6 h-6 mr-2">
              <Icon name="google" size={20} color="#c1ff72" />
              </View>
              <Text className="text-white text-center font-medium text-base">
                SIGN UP WITH GOOGLE
              </Text>
            </TouchableOpacity>

            {/* Apple Sign Up */}
            <TouchableOpacity
              onPress={handleAppleSignUp}
              className="bg-white border border-gray-900 rounded-2xl py-3 flex-row items-center justify-center"
            >
              <View className="w-6 h-6 mr-2">
              <Icon name="apple" size={20} color="#1D1D1F" />
              </View>
              <Text className="text-gray-900 text-center font-medium text-base">
                SIGN UP WITH APPLE
              </Text>
            </TouchableOpacity>

            {/* Email Sign Up */}
            <TouchableOpacity
              onPress={handleEmailSignUp}
              className="bg-minty-lime rounded-2xl border py-3 flex-row items-center justify-center"
            >
              <Mail size={20} color="#000" strokeWidth={2} className="mr-3" />
              <Text className="text-gray-900 text-center font-medium text-base ml-2">
                SIGN UP WITH EMAIL
              </Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Link */}
          <TouchableOpacity onPress={handleSignIn} className="mt-8">
            <Text className="text-gray-900 text-center text-base">
              Already a member? <Text className="font-semibold text-green-400">Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* Terms and Privacy */}
        <View className="pb-8">
          <Text className="text-gray-900 text-center text-sm">
            By continuing you agree to our{'\n'}
            <Text className="font-medium">Terms of Use</Text> & <Text className="font-medium">privacy policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}