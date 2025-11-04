import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

export default function TouchableOpacityNative() {
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "600", marginBottom: 5 }}>TouchableOpacity</Text>
            <TouchableOpacity
                onPress={() => Alert.alert("Yap!", "This is opacity button")}
                activeOpacity={0.4}
                disabled={false}
            >
                <View style={styles.btn}>
                    <Text style={styles.text}>Opacity Button</Text>
                </View>

            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    btn: {
        padding: 12,
        backgroundColor: "#FFD54F",
        borderRadius: 8,
        alignItems: "center"
    },
    text: { fontWeight: "600" }
});