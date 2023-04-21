import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-web";

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("MoodInput")}
            >
            <Text>Mood Input</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("MoodGraph")}
            >
            <Text>Mood Graph</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("RandomQuoteScreen")}
            >
            <Text>Quotes</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({});

export default Menu;