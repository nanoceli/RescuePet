import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const adoptarMascota = () => {
    return (
        <View style={styles.container}>
            <Text>Nuestros fieles amigos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA983',
        alignItems: 'center',
        justifyContent: 'center'
    }
})