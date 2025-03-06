import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import SocialIcons from './SocialIcons';
import MobileSignInScreen from './MobileSignInScreen';

const WelcomeScreen = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      image: require('../assets/onboard1.jpg'),
      welcomeText: 'Welcome to',
      appName: 'KredPay!',
      subtitle: 'Your new way to banking and everyday',
    },
    {
      image: require('../assets/onboard2.png'),
      welcomeText: 'Fastest way to use',
      appName: 'UPI',
      subtitle: 'Because we know you hate waiting',
    },
    {
      image: require('../assets/onboard2.png'),
      welcomeText: 'Get Started',
      appName: 'Join KredPay Now',
      subtitle: 'Sign up today and enjoy exclusive benefits!',
    }
  ];

  const handleNext = () => {
    setStep((prevStep) => (prevStep + 1) % steps.length);
  };
  return (
    <MobileSignInScreen/>
  );

  return (
    <View style={styles.mainContainer}>
      {/* Dashes Line - Only Show When step < 2 */}
      {step < 2 && (
        <View style={styles.dashContainer}>
          {steps.map((_, index) => (
            <View key={index} style={[styles.dash, index === step && styles.activeDash]} />
          ))}
        </View>
      )}

      {/* Small Image Below Dashes */}
      <Image source={require('../assets/load.jpg')} style={styles.logoImage} />

      {/* Background Image with Content */}
      <ImageBackground source={steps[step].image} style={styles.container}>
        <View style={styles.contentContainer}>
          {/* Show welcome text only when step < 2 */}
          {step < 2 ? (
            <>
              <Text style={styles.welcomeText}>{steps[step].welcomeText}</Text>
              <Text style={styles.appName}>{steps[step].appName}</Text>
              <Text style={styles.subtitle}>{steps[step].subtitle}</Text>

              {/* Continue Button */}
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Sign In using Mobile</Text>
              </TouchableOpacity>
              {/* Sign Up Options */}
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}><Image source={require('../assets/google.png')} style={styles.icon} /> Sign Up Using Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}><Image source={require('../assets/Apple_logo_black.png')} style={styles.icon} /> Sign Up Using Apple ID</Text>
              </TouchableOpacity>

              {/* OR Divider */}
              <Text style={styles.orText}>------------- OR -------------</Text>

              {/* Social Media Icons */}
              <View style={styles.iconContainer}>
                {/* <SocialIcons /> */}
                <Image source={require('../assets/google.png')} style={styles.icon} />
                <Image source={require('../assets/twitter.png')} style={styles.icon} />
                <Image source={require('../assets/facebook.png')} style={styles.icon} />
              </View>
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoImage: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  welcomeText: {
    fontSize: 32,
    color: 'green',
    marginBottom: 10,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    // borderColor: 'green',
    // borderWidth: 2,
    
  },
  contentContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dashContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  dash: {
    width: 30,
    height: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeDash: {
    backgroundColor: 'green',
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    color: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default WelcomeScreen;
