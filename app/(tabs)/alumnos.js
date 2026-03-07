import { FlatList, Text } from "react-native";
import { useEffect, useState } from "react";

export default function Alumnos(){

    const [alumnos, setAlumnos] = useState([]);

    useEffect(()=> {
        console.log('*-*-*-*-pantalla cargada*-*-*-*-');
    })
    return(
        <Text>***mensaje temporal***</Text>
    )
}