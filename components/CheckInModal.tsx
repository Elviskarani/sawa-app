import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CheckInModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectStatus: (status: string) => void;
}

export default function CheckInModal({ visible, onClose, onSelectStatus }: CheckInModalProps) {
  const statusOptions = [
    {
      id: 'charged-successfully',
      label: 'Charged Successfully',
      icon: 'checkmark-circle',
      iconColor: '#10b981',
      bgColor: '#10b981',
    },
    {
      id: 'charging-now',
      label: 'Charging Now',
      icon: 'battery-charging',
      iconColor: '#10b981',
      bgColor: '#10b981',
    },
    {
      id: 'could-not-charge',
      label: 'Could Not Charge',
      icon: 'close-circle',
      iconColor: '#ef4444',
      bgColor: '#ef4444',
    },
   
    {
      id: 'comment-only',
      label: 'Comment Only',
      icon: 'information-circle',
      iconColor: '#3b82f6',
      bgColor: '#3b82f6',
    },
  ];

  const handleSelect = (statusId: string) => {
    onSelectStatus(statusId);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable 
        className="flex-1 bg-black/50 justify-end"
        onPress={onClose}
      >
        <Pressable 
          className="bg-white rounded-t-2xl border"
          onPress={(e) => e.stopPropagation()}
        >
          <View className="p-6 pb-8">
            {statusOptions.map((option, index) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => handleSelect(option.id)}
                className="flex-row items-center py-4"
                style={{
                  borderBottomWidth: index < statusOptions.length - 1 ? 1 : 0,
                  borderBottomColor: '#f3f4f6',
                }}
              >
                <View
                  className="rounded-2xl border p-3 mr-4"
                  style={{ backgroundColor: option.bgColor }}
                >
                  <Ionicons
                    name={option.icon as keyof typeof Ionicons.glyphMap}
                    size={28}
                    color="white"
                  />
                </View>
                <Text className="text-lg text-gray-900 font-medium "  style={{ fontFamily: 'LeagueSpartan-Regular' }}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}