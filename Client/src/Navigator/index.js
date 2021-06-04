import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { perros } from '../Screens/indexScreens/perros'
import { gatos } from '../Screens/indexScreens/gatos'
import { publicar } from '../Screens/indexScreens/publicar'
import { index } from '../Screens/indexScreens/index'

const Tab = createBottomTabNavigator();

function TabBar(props) {
    return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export const Index = () => {
    return (
        <Tab.Navigator
            initialRouteName="Perros"
            tabBarOptions={{
                activeTintColor: '#B29640', activeBackgroundColor: '#E3FFF6'
            }}>
            
            <Tab.Screen
                name="Perros"
                component={perros}
                options={{
                    tabBarIcon: ({ color }) => <TabBar name="dog" color={color} />,

                }}
            />
            <Tab.Screen
                name="Gatos"
                component={gatos}
                options={{
                    tabBarIcon: ({ color }) => <TabBar name="cat" color={color} />,

                }} />
            <Tab.Screen
                name="Publicar"
                component={publicar}
                options={{
                    tabBarIcon: ({ color }) => <TabBar name="camera" color={color} />,

                }} />
        </Tab.Navigator>
    );
}