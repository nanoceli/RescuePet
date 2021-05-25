import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen'
import { DetailsScreen } from '../Screens/DetailsScreen'
import { adoptarMascota } from '../Screens/adoptarMascota'
import { Contacto } from '../Screens/Contacto'

const Stack = createStackNavigator();

export const Main = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Rescue Pet'
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Details' }}
            />
            <Stack.Screen
                name="adoptarMascota"
                component={adoptarMascota}
                options={{ title: 'adoptarMascota' }}
            />
            <Stack.Screen
                name="Contacto"
                component={Contacto}
                options={{ title: 'Contactanos' }}
            />
        </Stack.Navigator>
    );
}