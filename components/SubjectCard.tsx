import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

type Props = {
  name: string;
};

const SubjectCard = ({ name }: Props) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`/subject/${encodeURIComponent(name)}`)}
      className="mb-3 rounded-2xl bg-white dark:bg-blue-950 p-4 shadow border border-gray-200 dark:border-gray-700"
    >
      <Text className="text-lg font-semibold text-gray-800 dark:text-white">
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default SubjectCard;
