// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from '../components/LoadingScreen';
import WelcomeScreen from '../components/WelcomeScreen';
import PhoneNumberForm from '../components/PhoneNumberForm';
import OTPScreen from '../components/OTPScreen';
import NameAndAadharForm from '../components/NameAndAadharForm';
import Home from '../components/Home';
import { RootStackParamList } from './types'; // Import the navigation types
import ScannerScreen from '../components/ScannerScreen';

const Stack = createNativeStackNavigator<RootStackParamList>(); // Use the RootStackParamList type

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhoneNumberForm"
          component={PhoneNumberForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NameAndAadharForm"
          component={NameAndAadharForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="ScannerScreen"
          component={ScannerScreen}
          options={{ headerShown: false }} // Hide the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;