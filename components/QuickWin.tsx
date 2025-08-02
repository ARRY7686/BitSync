import { Star, Target, TrendingUp, Trophy } from 'lucide-react-native';
import React from 'react';
import { Pressable, Text, useColorScheme, View } from 'react-native';

interface QuickWinProps {
  title: string;
  description: string;
  type: 'achievement' | 'tip' | 'goal' | 'streak';
  onPress?: () => void;
}

const QuickWin: React.FC<QuickWinProps> = ({ title, description, type, onPress }) => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  const bgClass = isDarkMode ? 'bg-gradient-to-r from-purple-900 to-blue-900' : 'bg-gradient-to-r from-purple-50 to-blue-50';
  const borderClass = isDarkMode ? 'border-purple-700' : 'border-purple-200';
  const titleClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const descClass = isDarkMode ? 'text-purple-200' : 'text-gray-600';

  const iconConfig = {
    achievement: { icon: Trophy, color: '#F59E0B' },
    tip: { icon: Star, color: '#8B5CF6' },
    goal: { icon: Target, color: '#10B981' },
    streak: { icon: TrendingUp, color: '#3B82F6' },
  };

  const { icon: Icon, color: iconColor } = iconConfig[type];

  return (
    <Pressable onPress={onPress}>
      <View className={`${bgClass} ${borderClass} rounded-2xl p-4 border-2 mb-4`}>
        <View className="flex-row items-start">
          <View className={`p-2 rounded-xl mr-3 ${isDarkMode ? 'bg-white/10' : 'bg-white/80'}`}>
            <Icon size={20} color={iconColor} />
          </View>
          
          <View className="flex-1">
            <Text className={`text-base font-semibold mb-1 ${titleClass}`}>
              {title}
            </Text>
            <Text className={`text-sm ${descClass}`}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default QuickWin;
