import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert, StyleSheet } from "react-native";

export default function TouchableWithoutFeedbackNative() {
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "600", marginBottom: 5 }}>TouchableWithoutFeedback</Text>

            <TouchableWithoutFeedback
                onPress={() => Alert.alert("Yo!", "No visual feedback")}
                onLongPress={() => Alert.alert("Hold!", "Manual effect ")}
                hitSlop={20}
            >
                <View style={styles.btn}>
                    <Text style={styles.text}>No Visual Feedback</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        padding: 12,
        backgroundColor: "#B3E5FC",
        borderRadius: 8,
        alignItems: "center"
    },
    text: { fontWeight: "600" }
});
