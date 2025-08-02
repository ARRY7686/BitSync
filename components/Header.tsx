import { Bell, Menu, Search } from 'lucide-react-native';
import React from 'react';
import { Pressable, Text, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  userName?: string;
  subtitle?: string;
  showNotifications?: boolean;
  showSearch?: boolean;
  showMenu?: boolean;
  onNotificationPress?: () => void;
  onSearchPress?: () => void;
  onMenuPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userName = "Narendra",
  subtitle = "Upcoming Deadlines",
  showNotifications = true,
  showSearch = true,
  showMenu = false,
  onNotificationPress,
  onSearchPress,
  onMenuPress,
}) => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const insets = useSafeAreaInsets();

  const bgClass = isDarkMode ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const subtitleClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const iconColor = isDarkMode ? '#d1d5db' : '#374151';
  const buttonBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';

  return (
    <View 
      className={`${bgClass} px-6 pb-4 border-b border-gray-200 dark:border-gray-700`}
      style={{ paddingTop: insets.top + 10 }}
    >
      {/* Top row with greeting and actions */}
      <View className="flex-row justify-between items-center mb-3">
        <View className="flex-1">
          <Text className={`text-2xl font-bold ${textClass}`}>
            Welcome Back {userName} 👋
          </Text>
          <Text className={`text-base ${subtitleClass} mt-1`}>
            {subtitle}
          </Text>
        </View>
        
        <View className="flex-row space-x-3">
          {showSearch && (
            <Pressable
              onPress={onSearchPress}
              className={`p-2 rounded-full ${buttonBg}`}
            >
              <Search size={20} color={iconColor} />
            </Pressable>
          )}
          
          {showNotifications && (
            <Pressable
              onPress={onNotificationPress}
              className={`p-2 rounded-full ${buttonBg} relative`}
            >
              <Bell size={20} color={iconColor} />
              {/* Notification badge */}
              <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            </Pressable>
          )}
          
          {showMenu && (
            <Pressable
              onPress={onMenuPress}
              className={`p-2 rounded-full ${buttonBg}`}
            >
              <Menu size={20} color={iconColor} />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
