import React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  Bell,
  Plus,
  Home,
  FileText,
  HelpCircle,
  MessageSquare,
  Star,
  Settings,
  LogOut,
  Trash2,
} from "lucide-react-native";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { MenuSectionHeader } from "@/components/profile/MenuSectionHeader";
import { MenuItem } from "@/components/profile/MenuItem";
import { Footer } from "@/components/profile/Footer";

export default function ProfileScreen() {
  const handlePress = (item: string) => {
    console.log(`${item} pressed`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-1 bg-lime-300">
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#d9f99d"
            translucent={false}
          />
          {/* Header */}
          {/* <View className="bg-lime-300 px-4  py-4">
          <Text className="text-black text-3xl font-semibold" style={{ fontFamily: 'LeagueSpartan-SemiBold' }}>
            
          </Text>
        </View> */}

          {/* Content Area */}
          <ScrollView className="flex-1 bg-gray-50">
            <ProfileHeader
              name="Elvis Karani"
              email="elviskarani236@gmail.com"
              onAddVehicle={() => handlePress("Add Vehicle")}
              onEditProfile={() => handlePress("Edit Profile")}
            />

            <MenuSectionHeader title="YOUR STUFF" />
            <MenuItem
              icon={Bell}
              title="Notifications & Alert"
              onPress={() => handlePress("Notifications")}
            />
            <MenuItem
              icon={Plus}
              title="Add a New Charging Location"
              onPress={() => handlePress("Add Location")}
            />
            <MenuItem
              icon={Home}
              title="Add a Private Home Location"
              onPress={() => handlePress("Add Home")}
            />
            <MenuItem
              icon={FileText}
              title="Charge History"
              onPress={() => handlePress("Charge History")}
              showBorder={false}
            />

            <View className="h-4 bg-gray-50" />

            <MenuItem
              icon={HelpCircle}
              title="Frequently Asked Questions"
              onPress={() => handlePress("FAQ")}
            />
            <MenuItem
              icon={MessageSquare}
              title="Send Feedback"
              onPress={() => handlePress("Feedback")}
            />
            <MenuItem
              icon={Star}
              title="Rate us on Google Play"
              onPress={() => handlePress("Rate")}
            />
            <MenuItem
              icon={Settings}
              title="Settings"
              onPress={() => handlePress("Settings")}
              showBorder={false}
            />

            <View className="h-4 bg-gray-50" />

            <MenuItem
              icon={LogOut}
              title="Sign Out"
              onPress={() => handlePress("Sign Out")}
              isDanger
            />
            <MenuItem
              icon={Trash2}
              title="Delete My Account"
              onPress={() => handlePress("Delete Account")}
              showBorder={false}
              isDanger
            />

            <Footer />
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
