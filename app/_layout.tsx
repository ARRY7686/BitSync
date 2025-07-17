import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"; 
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./globals.css"; 


export default function RootLayout() {
  return (
    
    <SafeAreaProvider>
      <StatusBar style="auto" />

      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="subject/[id]"
          options={{
            title: "Subject Details",
            headerShown: true,
            headerBackTitle: "Back",
          }}
        />
      </Stack>
    </SafeAreaProvider>
 
  );
}
