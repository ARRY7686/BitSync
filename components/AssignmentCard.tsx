import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { CalendarDays } from 'lucide-react-native';

interface AssignmentCardProps {
  title: string;
  subject: string;
  dueDate: string;
 
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ title, subject, dueDate }) => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  const bgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const borderClass = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const titleClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const subjectClass = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const dateClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const iconColor = isDarkMode ? '#d1d5db' : '#4b5563';

  return (
    <View className={`rounded-2xl shadow-md p-4 mb-4 border ${bgClass} ${borderClass}`}>
      {/* Title */}
      <Text className={`text-lg font-semibold mb-1 ${titleClass}`}>{title}</Text>

      {/* Subject */}
      <Text className={`text-sm mb-3 ${subjectClass}`}>{subject}</Text>

      {/* Due Date */}
      <View className="flex-row items-center">
        <CalendarDays size={18} color={iconColor} />
        <Text className={`ml-2 text-sm ${dateClass}`}>Due: {dueDate}</Text>
      </View>
    </View>
  );
};

export default AssignmentCard;
