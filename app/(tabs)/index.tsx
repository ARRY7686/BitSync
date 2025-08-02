import AssignmentCard from "@/components/AssignmentCard";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import StatsCard from "@/components/StatsCard";
import { StatusBar } from "expo-status-bar";
import { AlertTriangle, BookOpen, Calendar, Clock } from "lucide-react-native";
import { Alert, ScrollView, Text, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Assignments from "../../data/assignmnet-date.json";

const groupByDueDate = (assignments: typeof Assignments) => {
  const grouped: Record<string, typeof Assignments> = {};
  assignments.forEach((assignment) => {
    const date = assignment.dueDate;
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(assignment);
  });
  return grouped;
};

const getAssignmentStats = (assignments: typeof Assignments) => {
  const today = new Date();
  const totalAssignments = assignments.length;
  
  // Count urgent assignments (due within 2 days)
  const urgentCount = assignments.filter(assignment => {
    const due = new Date(assignment.dueDate.split(' ')[0] + ' ' + assignment.dueDate.split(' ')[1] + ' ' + assignment.dueDate.split(' ')[2]);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 2 && diffDays >= 0;
  }).length;
  
  // Count assignments due this week
  const thisWeekCount = assignments.filter(assignment => {
    const due = new Date(assignment.dueDate.split(' ')[0] + ' ' + assignment.dueDate.split(' ')[1] + ' ' + assignment.dueDate.split(' ')[2]);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays >= 0;
  }).length;
  
  // Get unique subjects count
  const uniqueSubjects = new Set(assignments.map(a => a.subject)).size;
  
  return {
    total: totalAssignments,
    urgent: urgentCount,
    thisWeek: thisWeekCount,
    subjects: uniqueSubjects
  };
};

export default function Index() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const groupedAssignments = groupByDueDate(Assignments);
  const stats = getAssignmentStats(Assignments);
  const insets = useSafeAreaInsets();

  const bgClass = isDarkMode ? "bg-neutral-900" : "bg-gray-50";

  const handleNotificationPress = () => {
    Alert.alert("Notifications", "You have 3 new notifications");
  };

  const handleSearchPress = () => {
    Alert.alert("Search", "Search functionality coming soon!");
  };

  const handleSeeAllPress = () => {
    Alert.alert("See All", "View all assignments");
  };

  const handleAssignmentPress = (assignment: any) => {
    Alert.alert("Assignment Details", `View details for: ${assignment.title}`);
  };

  return (
    <View className={`flex-1 ${bgClass}`}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      
      {/* Header */}
      <Header
        userName="Narendra"
        subtitle="Let's tackle your assignments!"
        onNotificationPress={handleNotificationPress}
        onSearchPress={handleSearchPress}
      />

      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Stats Cards */}
        <View className="px-6 py-4">
          <SectionHeader 
            title="Overview"
            subtitle="Your assignment status at a glance"
          />
          
          <View className="flex-row flex-wrap justify-between">
            <View className="w-[48%] mb-4">
              <StatsCard
                title="Total Assignments"
                value={stats.total}
                icon={BookOpen}
                color="blue"
                subtitle="Active assignments"
              />
            </View>
            
            <View className="w-[48%] mb-4">
              <StatsCard
                title="Due Soon"
                value={stats.urgent}
                icon={AlertTriangle}
                color="red"
                subtitle="Within 2 days"
              />
            </View>
            
            <View className="w-[48%] mb-4">
              <StatsCard
                title="This Week"
                value={stats.thisWeek}
                icon={Calendar}
                color="orange"
                subtitle="Due this week"
              />
            </View>
            
            <View className="w-[48%] mb-4">
              <StatsCard
                title="Subjects"
                value={stats.subjects}
                icon={Clock}
                color="purple"
                subtitle="Active courses"
              />
            </View>
          </View>
        </View>

        {/* Assignments by Due Date */}
        <View className="px-6">
          <SectionHeader 
            title="Upcoming Deadlines"
            subtitle="Organized by due date"
            showSeeAll={true}
            onSeeAllPress={handleSeeAllPress}
          />

          {Object.entries(groupedAssignments).map(([dueDate, items]) => (
            <View key={dueDate} className="mb-6">
              <View className="flex-row items-center mb-4 px-2">
                <Calendar size={18} color={isDarkMode ? '#9CA3AF' : '#6B7280'} />
                <Text className={`ml-2 text-base font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {dueDate}
                </Text>
                <View className={`ml-2 px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <Text className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {items.length} {items.length === 1 ? 'assignment' : 'assignments'}
                  </Text>
                </View>
              </View>
              
              {items.map((item) => (
                <AssignmentCard
                  key={item.id}
                  {...item}
                  dueDate={`${item.dueDate} at ${item.Time}`}
                  onPress={() => handleAssignmentPress(item)}
                />
              ))}
            </View>
          ))}

          {/* Empty state */}
          {Object.keys(groupedAssignments).length === 0 && (
            <View className="items-center py-12">
              <BookOpen size={48} color={isDarkMode ? '#6B7280' : '#9CA3AF'} />
              <Text className={`text-lg font-medium mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                No assignments found
              </Text>
              <Text className={`text-sm mt-2 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                You're all caught up! Check back later for new assignments.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
