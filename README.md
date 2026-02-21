# Navegación en React
Crear navegación entre pantallas de React

Crear aplicación React
1. En terminal: **npx create-expo-app hola-mundo --template**
2. Seleccionar **Blank / En blanco**
3. Escribir el nombre de tu aplicación
4. Correr el comando **npm run web**
5. Puedes presionar en la terminal la tecla i para correr el simuador de iOS o a para el de Android
6. Puedes escanear el código QR y otorgar permisos en tu celular a Expo GO, esto te permitirá abrir tu proyecto en el celular

Creat navegación en React
1. Crear archivo plantilla.js
2. Crear archivo detalle.js

En layout.js:
```
import { Stack } from 'expo-router';
 
export default function Plantilla(){

return(
<Stack
 screenOptions={
 {
 headerStyle: {background-color: '#4f46e5'}
 },

 headerTintColor: '#fff'
 }
 />
)
}
```
En detalle.js
```
import { Stack } from 'expo-router';

export default function Detalle(){
return(
<Stack.Screen options={{title: 'Vista de detalle'}}/>



<View>
 <Text>Detalle</Text>
</View>
)
}
```
