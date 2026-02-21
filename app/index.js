import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { useRouter } from 'expo-router';


export default function App() {
  const ruta = useRouter();
  const listaRutas = [
    { id: 1, title: "React Native" },
    { id: 2, title: "Expo Router" },
    { id: 3, title: "JavaScript" },
    { id: 4, title: "Arquitectura" },
    { id: 5, title: "Proyecto Final" },
  ];

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
