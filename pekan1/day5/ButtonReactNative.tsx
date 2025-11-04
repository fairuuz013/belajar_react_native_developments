import React from "react";
import { View, Text, Button, Alert, Platform } from "react-native";

export default function ButtonReactNative() {
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "600", marginBottom: 5 }}>Button</Text>

            <Button
                title="Click Me"
                onPress={() => Alert.alert("YO Press", "Prese Button Active")}
                color={Platform.OS === "ios" ? "#007AFF" : "#2196F3"}
                disabled={false}
                accessibilityLabel="basic React Native Button"
            />

        </View>
    )
}