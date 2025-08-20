import { Colors } from "@/utils/Colors";
import { Stack } from "expo-router";

export default function ProtectedLayout() {
  return (
    <Stack screenOptions={{ headerShown: false,contentStyle: { backgroundColor: Colors.mainBg }, }}>
      {/* Tabs as the main flow */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Sub pages (not tabs) */}
      <Stack.Screen name="(sub_pages)/Password" 
        options={{ headerTitle: "Password Settings" ,contentStyle: { backgroundColor: Colors.mainBg },}} />
    </Stack>
  );
}
