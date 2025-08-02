import { LucideIcon } from 'lucide-react-native';
import React from 'react';
import { Text, useColorScheme, View } from 'react-native';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
  subtitle?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  color = 'blue',
  subtitle 
}) => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  const bgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const borderClass = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const titleClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const valueClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const subtitleClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const colorConfig = {
    blue: { bg: isDarkMode ? 'bg-blue-900' : 'bg-blue-50', icon: '#3B82F6' },
    green: { bg: isDarkMode ? 'bg-green-900' : 'bg-green-50', icon: '#10B981' },
    orange: { bg: isDarkMode ? 'bg-orange-900' : 'bg-orange-50', icon: '#F59E0B' },
    red: { bg: isDarkMode ? 'bg-red-900' : 'bg-red-50', icon: '#EF4444' },
    purple: { bg: isDarkMode ? 'bg-purple-900' : 'bg-purple-50', icon: '#8B5CF6' },
  };

  const { bg: iconBg, icon: iconColor } = colorConfig[color];

  return (
    <View className={`${bgClass} ${borderClass} rounded-2xl p-4 border shadow-sm`}>
      <View className="flex-row items-center justify-between mb-3">
        <View className={`${iconBg} p-2 rounded-xl`}>
          <Icon size={20} color={iconColor} />
        </View>
      </View>
      
      <Text className={`text-2xl font-bold ${valueClass} mb-1`}>
        {value}
      </Text>
      
      <Text className={`text-sm ${titleClass} mb-1`}>
        {title}
      </Text>
      
      {subtitle && (
        <Text className={`text-xs ${subtitleClass}`}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default StatsCard;
