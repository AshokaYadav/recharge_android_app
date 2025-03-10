import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert, PermissionsAndroid, Platform } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define navigation types
type RootStackParamList = {
  ScannerScreen: undefined;
};

type ScannerScreenProps = NativeStackScreenProps<RootStackParamList, 'ScannerScreen'>;

const ScannerScreen: React.FC<ScannerScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs access to your camera to scan QR codes',
              buttonPositive: 'OK',
            }
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert('Permission Denied', 'Camera access is required to scan QR codes');
            navigation.goBack(); // Go back if permission denied
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };

    requestCameraPermission();
  }, [navigation]);

  const onScanSuccess = (e: { data: string }) => {
    Alert.alert('Scanned Data', e.data);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Scan QR Code</Text>
      <QRCodeScanner
        onRead={onScanSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        showMarker={true}
        reactivate={true}
        reactivateTimeout={2000}
        cameraProps={{
          captureAudio: false, // Disable audio capture
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});

export default ScannerScreen;