import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "@react-native-vector-icons/fontawesome6"
import HomeScreen from '../pages/Dashboard/Home'
import ProfileScreen from '../pages/Dashboard/Profile'

const Tabs = createBottomTabNavigator()
export default function ButtomTabsNative() {
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'crimson',
            tabBarStyle: { height: 60 }
        }}>
            <Tabs.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => <Icon name='house' size={16} iconStyle={'solid'} color={color} />
                }} />

            <Tabs.Screen name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => <Icon name='user' size={16} iconStyle={'solid'} color={color} />
                }}
            />
        </Tabs.Navigator>
    )
} 