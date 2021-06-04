import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Contacto } from '../Screens/Contacto';
import { HomeScreen } from '../Screens/HomeScreen';


const Tab = createBottomTabNavigator();

function TabBarIcon(props) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarFont(props) {
    return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

export const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
            tabBarOptions={{
                activeTintColor: '#B29640', activeBackgroundColor: '#E3FFF6'
            }}>
            <Tab.Screen
                name="Inicio"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="menu" color={color} />,

                }} />
            <Tab.Screen
                name="Refugios"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

                }} />
            <Tab.Screen
                name="Veterinarias"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarFont name="clinic-medical" color={color} />,

                }} />
            <Tab.Screen
                name="Contacto"
                component={Contacto}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-information-circle-outline" color={color} />,

                }} />
        </Tab.Navigator>
    );
}