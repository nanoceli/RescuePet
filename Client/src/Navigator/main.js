import React, { useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './home'
import { Index } from './index'
import { useSelector } from "react-redux";
import { HeaderBackButton } from '@react-navigation/stack';
import { useDispatch } from "react-redux";
import { cambiarScreen } from '../Redux/Actions/screen'
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export const Main = () => {
    const screen = useSelector(state => state.screenReducer.screen)
    const dispatch = useDispatch();

    if (screen === "Inicio") {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Rescue Pet'
                    }}
                />
            </Stack.Navigator>
        );
    } else if (screen === "Invitado") {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    headerMode="screen"
                    component={Index}
                    options={{
                        title: 'Rescue Pet - Invitado',
                        headerLeft: (props) => (
                            <HeaderBackButton style={styles.back}
                                {...props}
                                onPress={() => {
                                    dispatch(cambiarScreen("Inicio"))
                                }}
                            />
                        )
                    }}
                />
            </Stack.Navigator>
        );
    } else if (screen === "Colaborador") {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Index}
                    options={{
                        title: 'Rescue Pet - Colaborador',
                        headerLeft: (props) => (
                            <HeaderBackButton
                                {...props}
                                onPress={() => {
                                    dispatch(cambiarScreen("Inicio"))
                                }}
                            />
                        )
                    }}
                />
            </Stack.Navigator>
        )
    }

}

const styles = StyleSheet.create({
    back: {
        
    }
})