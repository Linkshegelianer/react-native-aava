import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function EmployerLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,  // Скрыть заголовок
            }}
        >
            {/* Вкладка "Home" */}
            <Tabs.Screen
                name="home"  // Путь: app/employer/home.tsx
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    ),
                }}
            />

            {/* Вкладка "Job" */}
            <Tabs.Screen
                name="job"  // Путь: app/employer/job.tsx
                options={{
                    title: 'Job',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'briefcase' : 'briefcase-outline'} color={color} />
                    ),
                }}
            />

            {/* Вкладка "Messages" */}
            <Tabs.Screen
                name="messages"  // Путь: app/employer/messages.tsx
                options={{
                    title: 'Messages',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
