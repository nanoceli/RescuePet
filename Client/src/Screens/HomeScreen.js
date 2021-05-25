import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button 
                title="Mascotas perdidas"
                onPress={() => navigation.navigate('Details')}
            />
             <Button
                title="Adoptar"
                onPress={() => navigation.navigate('adoptarMascota')}
            />
               <Button
                title="Contactanos"
                onPress={() => navigation.navigate('Contacto')}
            />
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