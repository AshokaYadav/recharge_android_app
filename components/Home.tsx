import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// ✅ Navigation types define karna zaroori hai
type RootStackParamList = {
  ScannerScreen: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <Image source={require('../assets/load.jpg')} style={styles.logo} />

        {/* Input Field */}
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor="#999"
        />

        {/* Row with Three Divs */}
        <View style={styles.header}>
          <View style={styles.profileBox}>
            <Text style={styles.profileName}>Ajeet Kadam</Text>
            <Text style={styles.balanceText}>Main Balance</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.emoji}>💰</Text>
              <Text style={styles.amountText}>₹ 9000</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.actionBox}>
            <Text style={styles.emoji}>🎁</Text>
            <Text style={styles.actionText}>Refer & Earn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBox}>
            <Text style={styles.emoji}>➕</Text>
            <Text style={styles.actionText}>Add Money</Text>
          </TouchableOpacity>
        </View>

        {/* Recharge Section */}
        <View style={styles.rechargeSection}>
          <Image source={require('../assets/recharge.jpg')} style={styles.rechargeImage} />
        </View>

        {/* Recharge & Pay Bill Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recharge & Pay Bill</Text>
          <View style={styles.serviceRow}>
            <TouchableOpacity style={styles.serviceBox}>
              <Text style={styles.emoji}>💸</Text>
              <Text style={styles.serviceText}>Send Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceBox}>
              <Text style={styles.emoji}>⚡</Text>
              <Text style={styles.serviceText}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceBox}>
              <Text style={styles.emoji}>📺</Text>
              <Text style={styles.serviceText}>DTH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceBox}>
              <Text style={styles.emoji}>🌐</Text>
              <Text style={styles.serviceText}>Internet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.emoji}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.emoji}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanner}  onPress={() => navigation.navigate('ScannerScreen')}>
          <Text style={styles.emoji}>📷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.emoji}>💳</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.emoji}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  logo: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    fontSize: 16,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileBox: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    flex: 1,
    marginRight: 8,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  balanceText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
    marginLeft: 5,
  },
  emoji: {
    fontSize: 24,
  },
  actionBox: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    flex: 1,
    marginLeft: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  rechargeSection: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  rechargeImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginTop: 15,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceBox: {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    elevation: 2,
  },
  serviceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },

  /* Bottom Navigation Styles */
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  scanner: {
    backgroundColor: '#007bff',
    padding: 18,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 20,
  },
});

export default Home;
