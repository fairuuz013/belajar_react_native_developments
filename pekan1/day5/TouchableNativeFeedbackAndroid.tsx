import React from "react";
import { View, Text, TouchableNativeFeedback, Alert, Platform, StyleSheet } from "react-native";

export default function TouchableNativeFeedbackAndroid() {
    if (Platform.OS !== "android") return null;


    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "600", marginBottom: 5 }}>TouchableNativeFeedback ANDROID</Text>

            <TouchableNativeFeedback
                onPress={() => Alert.alert("Yo!", "Native ripple ✅")}
                background={TouchableNativeFeedback.Ripple("#000", true)}
                useForeground={true}
            >
                <View style={styles.btn}>
                    <Text style={styles.text}>Native Ripple Button</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        padding: 12,
        backgroundColor: "#C5E1A5",
        borderRadius: 8,
        alignItems: "center"
    },
    text: { fontWeight: "600" }
});
