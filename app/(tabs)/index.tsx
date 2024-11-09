import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import ApplicantProfileScreen from './applicant/Home';
import EmployeeProfileScreen from './employee/Home';
import EmployerProfileScreen from './employer/Home';

const Tab = createBottomTabNavigator();

const Index = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Applicant" component={ApplicantProfileScreen} />
                <Tab.Screen name="Employee" component={EmployeeProfileScreen} />
                <Tab.Screen name="Employer" component={EmployerProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Index;
