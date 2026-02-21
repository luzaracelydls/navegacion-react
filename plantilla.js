import { Stack } from 'expo-router';

export default function Plantilla(){
    return(
        <Stack 
            screenOptions={
                {headerStyle: {backgroundColor: '#4f46e5'},
                headerTintColor: '#fff',
            }
            }
        />
    )
}