import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
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
        <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </View>
    </ImageBackground>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 199.1,
    height: 174.7,
  },
  inputContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,

  },
  buttonContainer:{
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button:{
    backgroundColor: '#2E86C1',
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },
  buttonOutline:{
    backgroundColor: '#A9DFBF',
    marginTop: 5,
    borderColor: '#A9DFBF',
    borderWidth: 2,
  },
  buttonOutlineText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },  
  });