import { Text, View, useColorScheme } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const Notes = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const bgColor = isDarkMode ? 'bg-neutral-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-black';

  return (
    <View className={`flex-1 items-center justify-center ${bgColor}`}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />

      <Text className={`text-2xl font-bold ${textColor}`}>Coming Soon 📝 </Text>

    </View>
  );
};

export default Notes;
