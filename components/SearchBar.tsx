import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = 'Search...' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleChangeText = (text: string) => {
    setQuery(text);
    // Optional: trigger search on every keystroke
    // onSearch(text);
  };

  return (
    <View className="flex-row items-center bg-white rounded-2xl border px-4 py-1 shadow-md">
      <TextInput
        className="flex-1 text-base font-medium text-gray-800"
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={query}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
      {query.length > 0 && (
        <TouchableOpacity onPress={() => setQuery('')}>
          <Text className="text-gray-400 ml-2">✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}