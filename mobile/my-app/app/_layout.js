import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";

export default function Layout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/register" />
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="admin-dashboard" />
      </Stack>
    </AuthProvider>
  );
}
