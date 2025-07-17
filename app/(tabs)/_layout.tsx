import React from 'react';
import { Platform, useColorScheme } from 'react-native';
import { Tabs } from 'expo-router';
import { Home, FileText, User } from 'lucide-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Layout = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: isDark ? '#60A5FA' : '#1D4ED8',
          tabBarInactiveTintColor: isDark ? '#D1D5DB' : '#6B7280',
          tabBarStyle: {
            backgroundColor: isDark ? '#111827' : '#ffffff',
            borderTopWidth: 0,
            elevation: 10,
            height: Platform.OS === 'android' ? 70 : 60,
            paddingBottom :Platform.OS === 'android' ? 20 : 10,
            paddingTop: 8,
         
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
          name="subject"
          options={{
            title: 'Subject',
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
    </SafeAreaProvider>
  );
};

export default Layout;
