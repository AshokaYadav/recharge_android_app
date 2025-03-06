import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SocialIcons: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="google" size={30} color="red" />
      <Icon name="facebook" size={30} color="blue" />
      <Icon name="twitter" size={30} color="skyblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default SocialIcons;
