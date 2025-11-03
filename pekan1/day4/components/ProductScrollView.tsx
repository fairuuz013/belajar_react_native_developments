import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

interface Props {
    data: any[];
}

const ProductScrollView = ({ data }: Props) => {
    return (
        <ScrollView
            contentContainerStyle={{ paddingVertical: 20 }}
            overScrollMode="always"
            bounces={true}
            keyboardDismissMode="on-drag"
        >
            <Text style={styles.title}>ScrollView</Text>
            {data.map((item, idx) => (
                <View key={idx} style={styles.card}>
                    <Text>{item.product_name || "No Name"}</Text>
                </View>
            ))}
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    title: { fontSize: 18, fontWeight: "700", margin: 10 },
    card: {
        padding: 12,
        marginHorizontal: 8,
        marginVertical: 4,
        backgroundColor: "#eee",
        borderRadius: 8,
    },
});

export default ProductScrollView;