import {View, Text} from 'react-native';

import { useLocalSearchParams } from 'expo-router';

export default function Perfil() {
  const { titulo } = useLocalSearchParams();
  return (
    <View>
      <Text>{titulo}</Text>
    </View>
  );
}