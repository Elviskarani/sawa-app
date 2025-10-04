import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { router } from 'expo-router';


export default function NotificationAlertsScreen() {
    const [emailPlugshare, setEmailPlugshare] = useState(false);
    const [pushPlugshare, setPushPlugshare] = useState(false);
    const [emailMessaging, setEmailMessaging] = useState(false);
    const [pushMessaging, setPushMessaging] = useState(false);
    const [newStation, setNewStation] = useState(false);

    return (
        <View className="flex-1 bg-gray-100">
            {/* Header */}
            <View className="bg-lime-300 px-4 py-4 pt-12 border flex-row items-center">
                <TouchableOpacity className="mr-4" onPress={() => router.back()}>
                    <ArrowLeft color="black" size={24} />
                </TouchableOpacity>
                <Text className="text-black text-2xl font-semibold" style={{ fontFamily: 'LeagueSpartan-SemiBold' }}>
                    Notification & Alerts
                </Text>
            </View>

            <ScrollView className="flex-1">
                {/* PlugShare Updates Section */}
                <View className="bg-white mt-4 px-5 border py-5">
                    <Text className="text-black font-bold text-sm mb-2" style={{ fontFamily: 'LeagueSpartan-SemiBold' }}>
                        SAWACHARGE UPDATES
                    </Text>
                    <Text className="text-gray-700 text-base mb-4 leading-6" style={{ fontFamily: 'LeagueSpartan-Regular' }}>
                        Stay up to date on the latest updates on new features and changes to Sawacharge.
                    </Text>

                    <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
                        <Text className="text-black text-base" style={{ fontFamily: 'LeagueSpartan-Regular' }}>Email</Text>
                        <Switch
                            value={emailPlugshare}
                            onValueChange={setEmailPlugshare}
                            trackColor={{ false: '#D1D5DB', true: '#c1ff72' }}
                            thumbColor={emailPlugshare ? '#3B82F6' : '#F3F4F6'}
                        />
                    </View>

                    <View className="flex-row justify-between items-center py-3">
                        <Text className="text-black text-base" style={{ fontFamily: 'LeagueSpartan-Regular' }}>Push</Text>
                        <Switch
                            value={pushPlugshare}
                            onValueChange={setPushPlugshare}
                            trackColor={{ false: '#D1D5DB', true: '#c1ff72' }}
                            thumbColor={pushPlugshare ? '#3B82F6' : '#F3F4F6'}
                        />
                    </View>
                </View>

                {/* User to User Messaging Section */}
                <View className="bg-white mt-4 px-5 border py-5">
                    <Text className="text-black font-bold text-sm mb-2" style={{ fontFamily: 'LeagueSpartan-SemiBold' }}>
                        USER TO USER MESSAGING
                    </Text>
                    <Text className="text-gray-700 text-base mb-4 leading-6" style={{ fontFamily: 'LeagueSpartan-Regular' }}>
                        Receive messages sent from other Sawacharge users.
                    </Text>

                    <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
                        <Text className="text-black text-base" style={{ fontFamily: 'LeagueSpartan-Regular' }}>Email</Text>
                        <Switch
                            value={emailMessaging}
                            onValueChange={setEmailMessaging}
                            trackColor={{ false: '#D1D5DB', true: '#c1ff72' }}
                            thumbColor={emailMessaging ? '#3B82F6' : '#F3F4F6'}
                        />
                    </View>

                    <View className="flex-row justify-between items-center py-3">
                        <Text className="text-black text-base" style={{ fontFamily: 'LeagueSpartan-Regular' }}>Push</Text>
                        <Switch
                            value={pushMessaging}
                            onValueChange={setPushMessaging}
                            trackColor={{ false: '#D1D5DB', true: '#c1ff72' }}
                            thumbColor={pushMessaging ? '#3B82F6' : '#F3F4F6'}
                        />
                    </View>
                </View>

                {/* New Public Station Alerts Section */}
                <View className="bg-white mt-4 px-5 py-5 border  mb-4">
                    <Text className="text-black font-bold text-sm mb-2" style={{ fontFamily: 'LeagueSpartan-SemiBold' }}>
                        NEW PUBLIC STATION ALERTS
                    </Text>
                    <Text className="text-gray-700 text-base mb-4 leading-6" style={{ fontFamily: 'LeagueSpartan-Regular' }}>
                        Receive notifications when new nearby public stations are added.
                    </Text>

                    <View className="flex-row justify-between items-center py-3" >
                        <Text className="text-black text-base" style={{ fontFamily: 'LeagueSpartan-Regular' }}>New Public Station</Text>
                        <Switch
                            value={newStation}
                            onValueChange={setNewStation}
                            trackColor={{ false: '#D1D5DB', true: '#c1ff72' }}
                            thumbColor={newStation ? '#3B82F6' : '#F3F4F6'}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}