import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Dashes Line */}
      
      <View style={styles.dashContainer}>
      <View style={[styles.dash, styles.activeDash]} />
      <View style={styles.dash} />
      <View style={styles.dash} />
    </View>
      {/* Small Image Below Dashes */}
      <Image 
        source={require('../assets/load.jpg')}  // Small image
        style={styles.logoImage} 
      />

      {/* Background Image with Content */}
      <ImageBackground
        source={require('../assets/image1.jpg')} // Background image
        style={styles.container}
      >
        <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appName}>KredPay!</Text>
        <Text style={styles.subtitle}>Your new way to banking and everyday</Text>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button} onPress={() => console.log('Continue Pressed')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff', // White background
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor:'red',
    borderWidth:2
  },
  dashes: {
    fontSize: 24,
    color: '#000', // Black color
    // marginBottom: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
  logoImage: {
    width: 120,  
    height: 60, 
    resizeMode: 'contain', // Keeps aspect ratio
    marginBottom: 20,
    borderColor: 'red',
    borderWidth: 2,
  },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end', // Push children to the bottom
    borderColor:'black',
    borderWidth:9

  },
  welcomeText: {
    fontSize: 24,
    color: "green", 
    marginBottom: 10,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: "green", 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: "green", 
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green', 
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginTop: 20,


  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    // width: '100%',
    // height: '50%',
    // flex: 1,
    // justifyContent: 'center', // Push children to the bottom
    // alignItems: 'center',
    borderColor: 'red',
    borderWidth: 9,
    // backgroundColor:'white'
    
    
    // marginBottom: 100,
    
  },
  dashContainer: {
    flexDirection: 'row',  // Dashes को inline रखने के लिए
    justifyContent: 'center', // सेंटर में लाने के लिए
    alignItems: 'center',
    marginVertical: 20,
  },
  dash: {
    width: 30,  // Dash की चौड़ाई
    height: 5,  // Dash की ऊंचाई
    backgroundColor: 'gray', // Default ग्रे कलर
    marginHorizontal: 5, // Dash के बीच स्पेस
    borderRadius: 5, // गोलाकार edges के लिए
  },
  activeDash: {
    backgroundColor: 'green', // Active dash का रंग काला
  },
  
});

export default WelcomeScreen;
