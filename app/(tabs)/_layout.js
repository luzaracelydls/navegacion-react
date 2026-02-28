import { Tabs } from "expo-router";

export default function Layout(){
    return(
        <Tabs screenOptions={ {tabBarActiveTintColor: '#453823'}}
        >
            <Tabs.Screen name="perfil"></Tabs.Screen>
            <Tabs.Screen name="buscar"></Tabs.Screen>
            <Tabs.Screen name="config"></Tabs.Screen>
        </Tabs>
    )
}