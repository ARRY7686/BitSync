import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  useColorScheme,
} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pencil } from 'lucide-react-native';

const Profile = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const cardBg = isDark ? 'bg-neutral-800' : 'bg-gray-100';
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-500';

  const [profile, setProfile] = useState({
    name: 'Narendra Sirvi',
    email: 'narendra@email.com',
    semester: '3',
    term: 'Monsoon 2025',
    cgpa: '8.7',
    phone: '+91 9876543210',
    location: 'Dehradun, India',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (key: keyof typeof profile, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View className={`flex-1 ${bgClass} px-6 py-10`}>
      <StatusBar style={isDark ? 'light' : 'dark'} />

      {/* Heading */}
      <Text className={`text-3xl font-bold mb-6 text-center ${textPrimary}`}>Your Profile</Text>

      {/* Profile Image */}
      <View className="items-center mb-6">
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=18' }}
          className="w-32 h-32 rounded-full border-4 border-blue-500"
        />
      </View>

      {/* Info Card */}
      <View className={`relative ${cardBg} rounded-3xl p-6 shadow-md`}>
        {/* Edit Icon Button */}
        <TouchableOpacity
          className="absolute right-4 top-4 p-1 rounded-md"
          onPress={() => setIsEditing((prev) => !prev)}
        >  
        <View className='p-2'>
          <Pencil size={20} color={isDark ? '#ccc' : '#333'} /></View>
        </TouchableOpacity>

        {/* Editable Fields */}
        {[
          { label: 'Name', key: 'name' },
          { label: 'CGPA', key: 'cgpa' },
          { label: 'Phone', key: 'phone' },
          { label: 'Location', key: 'location' },
        ].map(({ label, key }) => (
          <View key={key} className="mb-4">
            <Text className={`text-xs uppercase tracking-widest ${textSecondary}`}>{label}</Text>
            {isEditing ? (
              <TextInput
                value={profile[key as keyof typeof profile]}
                onChangeText={(text) => handleChange(key as keyof typeof profile, text)}
                className={`text-lg mt-1 px-2 py-1 rounded-md ${textPrimary}`}
                placeholderTextColor={isDark ? '#888' : '#999'}
                style={{
                  backgroundColor: isDark ? '#2f2f2f' : '#fff',
                }}
              />
            ) : (
              <Text className={`text-lg font-medium mt-1 ${textPrimary}`}>
                {profile[key as keyof typeof profile]}
              </Text>
            )}
          </View>
        ))}

        {/* Static Fields */}
        {!isEditing && (
          <>
            <View className="mb-4">
              <Text className={`text-xs uppercase tracking-widest ${textSecondary}`}>Email</Text>
              <Text className={`text-lg font-medium mt-1 ${textPrimary}`}>{profile.email}</Text>
            </View>
            <View className="mb-4">
              <Text className={`text-xs uppercase tracking-widest ${textSecondary}`}>Semester</Text>
              <Text className={`text-lg font-medium mt-1 ${textPrimary}`}>{profile.semester}</Text>
            </View>
            <View className="mb-1">
              <Text className={`text-xs uppercase tracking-widest ${textSecondary}`}>Term</Text>
              <Text className={`text-lg font-medium mt-1 ${textPrimary}`}>{profile.term}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Profile;
