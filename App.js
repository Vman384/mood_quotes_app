import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import LandingScreen from './screens/HomeScreen';
import RandomQuoteScreen from './screens/Splashscreen';
import MoodInput from './screens/Moodinput';
import MoodGraph from './screens/MoodGraph';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Home' component={LandingScreen}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RandomQuoteScreen" component={RandomQuoteScreen} options={{ title: 'Your Quote' }} />
        <Stack.Screen name='MoodInput' component={MoodInput}/>
        <Stack.Screen name='MoodGraph' component={MoodGraph}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;