import { Stack } from "expo-router";

export default function Layout() {
  const headerShown = true;
  return (
    <Stack
      screenOptions={{
        headerShown: headerShown,
        headerStyle: {
          backgroundColor: '#4f46e5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}