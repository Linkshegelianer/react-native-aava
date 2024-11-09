import React from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Navigation() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="applicant/home"
                options={{
                    title: 'Applicant',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'user' : 'user-outline'} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="employee/home"
                options={{
                    title: 'Employee',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'briefcase' : 'briefcase-outline'} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="employer/home"
                options={{
                    title: 'Employer',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
