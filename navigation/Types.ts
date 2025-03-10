// src/navigation/types.ts
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  LoadingScreen: undefined;
  WelcomeScreen: undefined;
  PhoneNumberForm: undefined;
  OTPScreen: undefined;
  NameAndAadharForm: undefined;
  Home: undefined;
  ScannerScreen: undefined;
};

export type LoadingScreenProps = NativeStackScreenProps<RootStackParamList, 'LoadingScreen'>;
export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;
export type PhoneNumberFormProps = NativeStackScreenProps<RootStackParamList, 'PhoneNumberForm'>;
export type OTPScreenProps = NativeStackScreenProps<RootStackParamList, 'OTPScreen'>;
export type NameAndAadharFormProps = NativeStackScreenProps<RootStackParamList, 'NameAndAadharForm'>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ScannerScreenProps = NativeStackScreenProps<RootStackParamList, 'ScannerScreen'>;