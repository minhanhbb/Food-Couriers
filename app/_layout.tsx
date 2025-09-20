import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="login" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="home" />
      <Stack.Screen name="detail" />
      <Stack.Screen name="order" />
      <Stack.Screen name="finish" />
    </Stack>
  );
}
