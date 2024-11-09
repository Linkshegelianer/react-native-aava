// app/(tabs)/index.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Navigation() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Select a Profile</Text>

            {/* Кнопка для перехода в "Applicant" */}
            <Button
                title="Applicant"
                onPress={() => {
                    // Переход на домашнюю страницу для applicant
                    window.location.href = '/applicant/home';
                }}
            />

            {/* Кнопка для перехода в "Employee" */}
            <Button
                title="Employee"
                onPress={() => {
                    // Переход на домашнюю страницу для employee
                    window.location.href = '/employee/home';
                }}
            />

            {/* Кнопка для перехода в "Employer" */}
            <Button
                title="Employer"
                onPress={() => {
                    // Переход на домашнюю страницу для employer
                    window.location.href = '/employer/home';
                }}
            />
        </View>
    );
}
