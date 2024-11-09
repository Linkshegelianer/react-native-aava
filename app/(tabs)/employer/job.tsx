import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false, // Отключаем заголовок на уровне табов
          }}
      >
        {/* Экран Job */}
        <Tabs.Screen
            name="applicant/job"
            options={{
              title: 'Job',
              tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'briefcase' : 'briefcase-outline'} color={color} />
              ),
            }}
        />

        {/* Экран Messages */}
        <Tabs.Screen
            name="applicant/messages"
            options={{
              title: 'Messages',
              tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'mail' : 'mail-outline'} color={color} />
              ),
            }}
        />

        {/* Экран Home */}
        <Tabs.Screen
            name="applicant/home"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              ),
            }}
        />
      </Tabs>
  );
}
