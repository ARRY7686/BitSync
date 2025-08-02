import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import { Pressable, Text, useColorScheme, View } from 'react-native';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  showSeeAll?: boolean;
  onSeeAllPress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  showSeeAll = false,
  onSeeAllPress,
}) => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  const titleClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const subtitleClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const seeAllClass = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const iconColor = isDarkMode ? '#60A5FA' : '#2563EB';

  return (
    <View className="flex-row justify-between items-center mb-4 px-1">
      <View className="flex-1">
        <Text className={`text-xl font-bold ${titleClass}`}>
          {title}
        </Text>
        {subtitle && (
          <Text className={`text-sm ${subtitleClass} mt-1`}>
            {subtitle}
          </Text>
        )}
      </View>
      
      {showSeeAll && (
        <Pressable
          onPress={onSeeAllPress}
          className="flex-row items-center"
        >
          <Text className={`text-sm font-medium ${seeAllClass} mr-1`}>
            See All
          </Text>
          <ChevronRight size={16} color={iconColor} />
        </Pressable>
      )}
    </View>
  );
};

export default SectionHeader;
