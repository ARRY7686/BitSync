import {
  Text,
  View,
  useColorScheme,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import AssignmentCard from "@/components/AssignmentCard";
import {
  registerForPushNotificationsAsync,
  scheduleAssignmentNotification,
} from "../../utils/notification";
import dayjs from "dayjs";

// 📚 Assignments with Time split
const Assignments = [
  { id: 1, title: "Graded Quiz Week 7 & 8", subject: "DSA", dueDate: "16 July 2025", Time: "11:59PM" },
  { id: 2, title: "Graded Quiz Week 7 & 8", subject: "CLI & Scripting", dueDate: "16 July 2025", Time: "11:59PM" },
  { id: 3, title: "Graded Quiz Week 7 & 8", subject: "General Physics", dueDate: "16 July 2025", Time: "11:59PM" },
  { id: 4, title: "Graded Quiz Week 7 & 8", subject: "General Biology", dueDate: "16 July 2025", Time: "11:59PM" },
  { id: 5, title: "Graded Quiz Week 9 & 10", subject: "DSA", dueDate: "26 July 2025", Time: "11:59PM" },
  { id: 6, title: "Graded Quiz Week 9 & 10", subject: "CLI & Scripting", dueDate: "26 July 2025", Time: "11:59PM" },
  { id: 7, title: "Graded Quiz Week 9 & 10", subject: "General Biology", dueDate: "26 July 2025", Time: "11:59PM" },
  { id: 8, title: "Graded Quiz Week 9 & 10", subject: "General Physics", dueDate: "26 July 2025", Time: "11:59PM" },
];

// 🔁 Group helper
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

  const groupedAssignments = groupByDueDate(Assignments);

  useEffect(() => {
    const setupNotifications = async () => {
      await registerForPushNotificationsAsync();
      Assignments.forEach(async (assignment) => {
        const fullDateTime = `${assignment.dueDate} ${assignment.Time}`;
        const date = dayjs(fullDateTime, "DD MMMM YYYY hh:mmA").toDate();
        if (date > new Date()) {
          await scheduleAssignmentNotification(assignment.title, date);
        }
      });
    };

    setupNotifications();
  }, []);

  const bgClass = isDarkMode ? "bg-neutral-900" : "bg-gray-50";
  const textClass = isDarkMode ? "text-white" : "text-black";
  const headerClass = isDarkMode ? "text-gray-300" : "text-gray-700";

  return (
    <ScrollView className={`px-5 py-5 flex-1 ${bgClass}`}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />

      <View className="px-5 mb-4 ">
        <Text className={`text-2xl font-bold ${textClass}`}>
          Upcoming Deadlines
        </Text>
      </View>


      {Object.entries(groupedAssignments).map(([dueDate, items]) => (
        <View key={dueDate}>
          {/* Due Date Header */}
          <Text className={`px-2 text-lg font-semibold mt-2 mb-2 ${headerClass}`}>
            {dueDate}
          </Text>

          {/* Cards under this due date */}
          {items.map((item) => (
            <AssignmentCard
              key={item.id}
              {...item}
              dueDate={`${item.dueDate} ${item.Time}`}
              darkMode={isDarkMode}
            />
          ))}
        </View>
      ))}

      <View style={{ height: 100 }} /> {/* Bottom spacing */}
    </ScrollView>
  );
}
