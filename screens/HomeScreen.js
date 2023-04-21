import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";


const LandingScreen = () => {
  const navigation = useNavigation();

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('./images/background.jpg')}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={require('./images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>
          placeholder name
        </Text>
        <Text style={styles.heading}>
          placeholder
        </Text>
        <TouchableOpacity style={styles.registerButton} onPress={navigateToRegister}>
          <Text style={styles.registerbuttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={navigateToLogin}>
          <Text style={styles.loginbuttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 199.1,
    height: 174.7,
  },
  title: {
    fontFamily: 'Outfit',
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 0,
  },
  heading: {
    fontFamily: 'Outfit',
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  registerButton: {
    width: 200,
    height: 50,
    backgroundColor: '#7DCEA0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 20,
  },
  loginButton: {
    width: 200,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  registerbuttonText: {
    fontFamily: 'Outfit',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FDFEFE',
  },
  loginbuttonText: {
    fontFamily: 'Outfit',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7DCEA0',
  },
});

export default LandingScreen;
