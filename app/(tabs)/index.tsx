import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import AssignmentCard from "@/components/AssignmentCard";
import Assignments from "../../data/assignmnet-date.json"; // ✅ JSON = array

const groupByDueDate = (assignments: typeof Assignments) => {
  const grouped: Record<string, typeof Assignments> = {};
  assignments.forEach((assignment) => {
    const date = assignment.dueDate;
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(assignment);
  });
  return grouped;
};

export default function Index() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const groupedAssignments = groupByDueDate(Assignments); // ✅ No .assignments

  const bgClass = isDarkMode ? "bg-neutral-900" : "bg-gray-50";
  const textClass = isDarkMode ? "text-white" : "text-black";
  const headerClass = isDarkMode ? "text-gray-300" : "text-gray-700";
  

  return (
    <ScrollView className={`px-5 py-5 flex-1 ${bgClass}`}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <View className="px-5 mb-4 pt-10">
        <Text className={`text-2xl font-bold ${textClass}`}>Upcoming Deadlines</Text>
      </View>

      {Object.entries(groupedAssignments).map(([dueDate, items]) => (
        <View key={dueDate}>
          <Text className={`px-2 text-lg font-semibold mt-2 mb-2 ${headerClass}`}>{dueDate}</Text>
          {items.map((item) => (
            <AssignmentCard
              key={item.id}
              {...item}
              dueDate={`${item.dueDate} ${item.Time}`}
            />
          ))}
        </View>
      ))}

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}
