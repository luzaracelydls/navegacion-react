import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const ruta = useRouter();

  return (

    <View style={styles.container}>
     <Pressable onPress={() => ruta.push('/detalle')}>
      <Text>Ir a la vista detalle</Text>
     </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
