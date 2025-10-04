import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';


export default function EmailSignInScreen() {

  const router = useRouter();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [marketingOptIn, setMarketingOptIn] = useState(false);

  const handleSignin = () => {
    // Handle account creation
    console.log({ displayName, email, password, marketingOptIn });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <View className="flex-1 px-6">
        {/* Back Button */}
        <View className="pt-4">
          <TouchableOpacity onPress={handleBack} className="w-10">
            <ArrowLeft size={28} color="#000" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="flex-1 justify-center pb-20">
          {/* Title */}
          <Text className="text-3xl font-bold text-deep-slate text-center mb-16">
            Join SawaCharge
          </Text>

          {/* Form Fields */}
          <View className="gap-3">
            {/* Display Name Input */}
          

            {/* Email Input */}
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email Address"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
              className="bg-gray-200 rounded-2xl border px-6 py-3 text-gray-900 text-sm"
            />

            {/* Password Input */}
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
              className="bg-gray-200 rounded-2xl border px-6 py-3 text-gray-900 text-sm"
            />
          </View>

        
        </View>

        {/* Create Account Button */}
        <View className="pb-8">
          <TouchableOpacity
            onPress={handleSignin}
            className="bg-minty-lime border border-gray-900 rounded-2xl py-3"
          >
            <Text className="text-gray-900 text-center font-medium text-base">
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}