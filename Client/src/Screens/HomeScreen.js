import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Banner } from '../Components/Banner'
import { useDispatch } from "react-redux";
import { cambiarScreen } from '../Redux/Actions/screen'

export const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Banner />
            <Text style={styles.titulo}>Bienvenidos !!!</Text>
            <Text style={styles.texto}>
                <Text><Text style={styles.texto1}>Rescue Pet</Text> es una app para hacer mas facil la tarea de todas las personas que estamos involucradas en el mundo de las mascotas. Aqui puedes encontrar secciones de <Text style={styles.texto2}>Mascotas perdidas, Mascotas encontradas, Mascotas en adopcion, Mascotas adoptadas</Text>.</Text> <Text>Tambien puedes buscar refugios o veterinarias segun localidad para encontrar ayuda de forma mas rapida.</Text>
                <Text>Si eres un refugio o un proteccionista y queres sumarte a Rescue Pet para que tu informacion este disponible, ingresa en <Text style={styles.texto2}>"Colaboradores"</Text> aqui debajo.
                Pueden escribirnos por cualquier opinion o idea innovadora.</Text>
            </Text>
            <View style={styles.buttons}>
                <Button title="Invitado" onPress={() => dispatch(cambiarScreen("Invitado"))} />
                <Text>           </Text>
                <Button title="Colaborador" onPress={() => dispatch(cambiarScreen("Colaborador"))} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        flexDirection: 'column',
        backgroundColor: '#FFA983',
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        padding: 10
    },
    titulo: {
        fontSize: 32,
        fontStyle: "italic",
        fontWeight: "200",
        marginTop: -35,
        marginBottom: -15
    },
    texto: {
        alignSelf: 'center',
        fontSize: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        marginBottom: 20
    },
    texto1: {
        fontSize: 18,
        fontWeight: "bold"
    },
    texto2: {
        fontSize: 15,
        fontStyle: "italic",
        fontWeight: "bold"
    }
})