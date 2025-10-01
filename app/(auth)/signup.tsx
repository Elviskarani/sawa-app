import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';


export default function EmailSignUpScreen() {

  const router = useRouter();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [marketingOptIn, setMarketingOptIn] = useState(false);

  const handleCreateAccount = () => {
    router.push('/(tabs)/maps');
    // Handle account creation
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
            <TextInput
              value={displayName}
              onChangeText={setDisplayName}
              placeholder="Display name"
              placeholderTextColor="#666"
              className="bg-gray-200 rounded-2xl px-6 py-3 text-gray-900 text-sm"
            />

            {/* Email Input */}
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email Address"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
              className="bg-gray-200 rounded-2xl px-6 py-3 text-gray-900 text-sm"
            />

            {/* Password Input */}
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
              className="bg-gray-200 rounded-2xl px-6 py-3 text-gray-900 text-sm"
            />
          </View>

          {/* Marketing Opt-in */}
          <View className="flex-row items-center mt-8 px-2">
            <Text className="flex-1 text-gray-900 text-sm mr-4">
              I'd like to hear from SawaCharge for research news and marketing offers
            </Text>
            <Switch
              value={marketingOptIn}
              onValueChange={setMarketingOptIn}
              trackColor={{ false: '#D1D5DB', true: '#C5F547' }}
              thumbColor="#fff"
              ios_backgroundColor="#D1D5DB"
            />
          </View>
        </View>

        {/* Create Account Button */}
        <View className="pb-8">
          <TouchableOpacity
            onPress={handleCreateAccount}
            className="bg-minty-lime border border-gray-900 rounded-2xl py-3"
          >
            <Text className="text-gray-900 text-center font-medium text-base">
              CREATE ACCOUNT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}