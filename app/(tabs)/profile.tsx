import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Pencil, LogOut } from 'lucide-react-native';


const Profile = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const bg = isDark ? 'bg-neutral-900' : 'bg-white';
  const text = isDark ? 'text-white' : 'text-black';
  const card = isDark ? 'bg-neutral-800' : 'bg-gray-100';

  return (
    <View className={`flex-1 ${bg} px-6 pt-12`}>
      {/* Profile Card */}
      <View
        className={`items-center p-6 rounded-2xl shadow-lg ${card}`}
        style={{ elevation: 6 }}
      >
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?u=bitsync-user' }}
          className="w-28 h-28 rounded-full border-4 border-blue-500"
        />
        
        <Text className={`mt-4 text-xl font-semibold  ${text}`}>Narendra</Text>
        <Text className="text-gray-400 text-sm mt-2">24BCSxxxxx@sst.scaler.com</Text>
        
        <TouchableOpacity className="flex-row items-center mt-4 bg-blue-600 px-4 py-2 rounded-full shadow-md">
          <Pencil color="white" size={18} />
          <Text className="text-white ml-2 font-semibold text-sm">Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Info Section */}
      <View className="mt-8 space-y-10">
        <View className={`rounded-xl p-4 ${card} shadow`}>
          <Text className="text-gray-400 text-xs">Semester</Text>
          <Text className={`text-lg font-medium ${text}`}>3</Text>
        </View>
        <View className={`rounded-xl p-4 mt-5 ${card} shadow`}>
          <Text className="text-gray-400 text-xs">Term</Text>
          <Text className={`text-lg font-medium ${text}`}>2</Text>
        </View>
      </View>

      {/* Logout */}
      <TouchableOpacity
        className="mt-10 flex-row items-center justify-center bg-red-600 px-4 py-3 rounded-xl self-center"
        onPress={() => {
          // handle logout
        }}
      >
        <LogOut color="white" size={18} />
        <Text className="text-white ml-2 font-semibold">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
