import {View, Text} from 'react-native';
import { Stack } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function Detalle() {
  const { title, id } = useLocalSearchParams();
  return (
    <View>
      <Text>Vista detalle de {title} con ID {id}</Text>
    </View>
  );
}