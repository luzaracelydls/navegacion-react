import { View, Text } from "react-native";

import { useLocalSearchParams } from 'expo-router';

export default function Perfil() {
    const {mensaje} = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Perfil {mensaje}</Text>
    </View>
  );
}