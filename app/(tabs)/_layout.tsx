import { useColorScheme } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Home, FileText, User } from 'lucide-react-native';

const Layout = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDark ? '#60A5FA' : '#1D4ED8',  // blue (light/dark)
        tabBarInactiveTintColor: isDark ? '#D1D5DB' : '#6B7280', // gray-300 vs gray-500
        tabBarStyle: {
          backgroundColor: isDark ? '#111827' : '#ffffff', // bg-gray-900 vs white
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: 'Notes',
          tabBarIcon: ({ color, size }) => <FileText color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
