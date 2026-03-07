import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';

export default function TabLayout() {
   

    const headerShown = true;
    return(
        <Tabs screenOptions={{ headerShown: {headerShown} }}>

            <Tabs.Screen name="inicio" options={{ }} />
            <Tabs.Screen name="alumnos" options={{  
                tabBarIcon: ({color}) => <AntDesign name="search1" size={24} color={color} />
             }} />
            <Tabs.Screen name="perfil" options={{
               
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />
                
            }}
            />   
        </Tabs>
    )
}