import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function Detalle(){
    return(
        <>
        <Stack.Screen options={{title: 'Vista detalle'}}/>
         <View>
            <Text>Estás en la vista detalle</Text>
        </View>
        </>  
    )
}