import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>

            <Tabs.Screen name="index" options={{ titulo: 'Inicio' }} />
            <Tabs.Screen name="buscar" options={{ titulo: 'Buscar', 
                tabBarIcon: ({color}) => <AntDesign name="search1" size={24} color={color} />
             }} />
            <Tabs.Screen name="perfil" options={{ 
                titulo: 'Perfil', 
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                params: {mensaje: 'holaMundo'}
            }}
            />   
        </Tabs>
    )
}