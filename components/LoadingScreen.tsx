import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');



const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/load.jpg')}  // Make sure this path is correct
        style={styles.logoImage} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: width, // Full screen width
    height: height, // Full screen height
    justifyContent: 'center', // Center vertically
    alignItems: 'center',  // Center horizontally
    backgroundColor: '#fff', // Optional background color
  },
  logoImage: {
    width: 250,  // Adjust width for better visibility
    height: 250, // Adjust height for better visibility
    resizeMode: 'contain', // Ensures the image fits properly
  },
});

export default LoadingScreen;
