import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const perros = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Text>Mascotas perdidas</Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
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