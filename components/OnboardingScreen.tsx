import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onboarding 1</Text>
      <Text style={styles.title}>Onboarding 3</Text>
      <Text style={styles.title}>Onboarding 4</Text>

      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.appName}>KredPay!</Text>
      <Text style={styles.subtitle}>Your new way to banking and everyday utilities</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Fastest way to use</Text>
      <Text style={styles.sectionSubtitle}>UPI</Text>
      <Text style={styles.sectionText}>Because we know you hate waiting</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.authButton}>
        <Text style={styles.authButtonText}>Sign In using Mobile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.authButton}>
        <Text style={styles.authButtonText}>Sign Up Using Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.authButton}>
        <Text style={styles.authButtonText}>Sign Up Using Apple ID</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 22,
    marginBottom: 5,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  authButton: {
    borderColor: '#007AFF',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  authButtonText: {
    color: '#007AFF',
    fontSize: 18,
  },
  orText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default OnboardingScreen;