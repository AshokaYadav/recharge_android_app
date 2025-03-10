import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// ✅ Navigation types define
type RootStackParamList = {
  OTPScreen: undefined;
  NameAndAadharForm: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'OTPScreen'>;

const OTPScreen: React.FC<Props> = ({ navigation }) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<TextInput[]>([]);

  const handleOTPChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // ✅ Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerifyOTP = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 6) {
      Alert.alert('Success', 'OTP Verified Successfully!');
      navigation.navigate('NameAndAadharForm');
    } else {
      Alert.alert('Error', 'Please enter a valid OTP.');
    }
  };

  return (
    <View style={styles.container}>
      {/* ✅ इमेज ऐड की */}
      <Image source={require('../assets/load.jpg')} style={styles.logo} />
      <Text style={styles.title}>OTP Sent on (+91) 123 456 7890</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOTPChange(index, value)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#00C72C',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OTPScreen;
