import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const quotes = [
    "The best way to predict the future is to invent it.",
    "Innovation distinguishes between a leader and a follower.",
    "The only way to do great work is to love what you do.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    "It’s not about money. It’s about the people you have, how you’re led, and how much you get it.",
    "Stay hungry, stay foolish.",
    "Your work is discover your world and then with all your heart give yourself to it.",
    'The only way to do great work is to love what you do.',
    'The best revenge is massive success.',
    'Life is what happens when you’re busy making other plans.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'The way to get started is to quit talking and begin doing.',
  ];

const RandomQuoteScreen = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const onSwipeUp = () => {
    generateRandomQuote();
  };

  return (
    <GestureRecognizer
      style={styles.container}
      onSwipeUp={onSwipeUp}
      config={{
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
      }}>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{currentQuote}</Text>
      </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  quoteContainer: {
    paddingHorizontal: 20,
  },
  quoteText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default RandomQuoteScreen;