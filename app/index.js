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
        {
            listaRutas.map((rutaItem) => (
                <Pressable onPress={() => ruta.push({
                    pathname:'/detalle',
                    params: { title: rutaItem.title, id: rutaItem.id}
                })}>
                <Text>Ir a la vista detalle de {rutaItem.title}</Text>
                </Pressable>
            ))
        }
        
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
