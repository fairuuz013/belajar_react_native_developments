import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome! 👋</Text>
            <Text style={styles.subtitle}>Choose an option below</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Profile")}
            >
                <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Messages</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "navy",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 40,
    },
    button: {
        backgroundColor: "navy",
        padding: 15,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marginBottom: 15,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});