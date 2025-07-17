import React from 'react';
import { View, Text, ScrollView, useColorScheme } from 'react-native';
import semesterData from '@/data/subject.json';
import SubjectCard from '@/components/SubjectCard';

const SubjectsList = () => {
  const isDark = useColorScheme() === 'dark';
  const bg = isDark ? 'bg-neutral-900' : 'bg-gray-50';
  const text = isDark ? 'text-white' : 'text-black';
  const mutedText = isDark ? 'text-gray-300' : 'text-gray-600';

  return (
    <ScrollView className={`flex-1 px-5 py-10 ${bg}`}>
      <Text className={`text-3xl font-bold mb-6 ${text}`}>📚 All Subjects</Text>

      {semesterData.map((sem) => (
        <View key={sem.semester} className="mb-8">
          <Text className={`text-xl font-semibold mb-2 ${text}`}>
            Semester {sem.semester}
          </Text>

          {['term1', 'term2'].map((term) => (
            <View key={term} className="mb-3">
              <Text className={`text-base font-medium mb-2 ${mutedText}`}>
                {term.toUpperCase()}
              </Text>

              <View className="space-y-3">
                {sem[term].map((subject: string) => (
                  <SubjectCard key={subject} name={subject} />
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}

      <View className="h-20" />
    </ScrollView>
  );
};

export default SubjectsList;
