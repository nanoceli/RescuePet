import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Logos(props) {
    return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export const index = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text>
                Gracias por formar parte de esta gran comunidad!
            </Text>
            <Text>
                Si encontraste a un perro abandonado, tienes un perro en transito para dar en adopcion o quieren adoptar un perro
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        flexDirection: 'column',
        backgroundColor: '#FFA983',
        alignItems: 'center'
    }
})