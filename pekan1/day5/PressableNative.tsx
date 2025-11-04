import React, { useState } from "react";
import { View, Text, Pressable, Alert, StyleSheet } from "react-native";

export default function PressableNative() {
    const [pressed, setPressed] = useState(false)


    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "600", marginBottom: 5 }}>Pressable</Text>

            <Pressable onPress={() => Alert.alert("Bro", "Tap Pressble")}
                onLongPress={() => Alert.alert("Hold", "Kamu Long Press")}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
                hitSlop={20}
                android_ripple={{ color: "#aaa" }}
                style={({ pressed }) => [
                    styles.btn,
                    { opacity: pressed ? 0.5 : 1 }

                ]}
            >
                <Text style={styles.text}>
                    {pressed ? "Holding..." : "Pressable Button"}
                </Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 12,
        backgroundColor: "#8BC34A",
        borderRadius: 8,
        alignItems: "center",
    },
    text: { fontWeight: "600", color: "#000" }
});