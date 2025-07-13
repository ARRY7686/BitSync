import { Stack } from "expo-router";
import './globals.css'
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {

  return (
    <>

<StatusBar />

      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

    </>
  )
}
