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
import { router } from "expo-router";

export default function ProfileScreen() {
  const handlePress = (item: string) => {
    console.log(`${item} pressed`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-lime-300"  edges={["top"]}>
        <View className="flex-1 bg-lime-300">
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#d9f99d"
            translucent={false}
          />
      

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
              onPress={() => router.push('/notification')}
            />
            <MenuItem
              icon={Plus}
              title="Add a New Charging Location"
              onPress={() => router.push('/add-location')}
            />
            <MenuItem
              icon={Home}
              title="Add a Private Home Location"
              onPress={() => router.push('/add-location')}
            />
            <MenuItem
              icon={FileText}
              title="Charge History"
              onPress={() => router.push('/charge-history')}
              showBorder={false}
            />
            <View className="h-4 bg-gray-50" />

            <MenuItem
              icon={HelpCircle}
              title="Frequently Asked Questions"
              onPress={() => router.push ('/FAQ')}
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
              onPress={() => router.push('/Settings')}
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
