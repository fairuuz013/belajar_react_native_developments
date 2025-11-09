import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Profile() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Profile</Text>
            </View>

            <View style={styles.profileCard}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>JD</Text>
                </View>
                <Text style={styles.name}>RuusKinss</Text>
                <Text style={styles.email}>minji@gmail.com</Text>
            </View>

            <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Account Info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Member since:</Text>
                    <Text style={styles.infoValue}>Jan 2024</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Location:</Text>
                    <Text style={styles.infoValue}>New York</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backButtonText}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    header: {
        alignItems: "center",
        marginTop: 50,
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "navy",
    },
    profileCard: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "navy",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    avatarText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "navy",
        marginBottom: 5,
    },
    email: {
        fontSize: 14,
        color: "#666",
    },
    infoSection: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "navy",
        marginBottom: 15,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    infoLabel: {
        fontSize: 14,
        color: "#666",
    },
    infoValue: {
        fontSize: 14,
        fontWeight: "600",
        color: "navy",
    },
    backButton: {
        backgroundColor: "navy",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    backButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});