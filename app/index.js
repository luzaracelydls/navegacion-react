import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, ScrollView} from 'react-native';
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
        
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'space-between' }}>
        
        
        <View style={styles.botones}>
            <Pressable style={styles.boton} onPress={() => ruta.push({pathname:'/perfil', params: { titulo: 'Perfil'}})}><Text>Pestaña 1</Text></Pressable>
            <Pressable style={styles.boton} onPress={() => ruta.push({pathname:'/buscar', params: { titulo: 'Buscar'}})}><Text>Pestaña 2</Text></Pressable>
            <Pressable style={styles.boton} onPress={() => ruta.push({pathname:'/config', params: { titulo: 'Configuración'}})}><Text>Pestaña 3</Text></Pressable>
        </View>
        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    botones:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    boton:{
        textAlign:'center',
       
        padding: 20,
        borderRadius: 10,
    }
});
