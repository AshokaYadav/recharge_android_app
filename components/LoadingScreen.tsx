import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeScreen'); // Navigate to WelcomeScreen
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator size="large" color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LoadingScreen;
