import React from "react";
import { SectionList, Text, View, StyleSheet } from "react-native";

interface Props {
    data: any[];
}

const ProductSectionList = ({ data }: Props) => {
    const sections = [
        { title: "Top Chocolates 🍫", data: data.slice(0, 5) },
        { title: "More Chocolates ✨", data: data.slice(5, 10) },
    ]


    return (
        <SectionList
            sections={sections}
            keyExtractor={(_, i) => i.toString()}
            stickySectionHeadersEnabled={true}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}

            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Text>{item.product_name || "No Name"}</Text>
                </View>
            )}
            style={{ height: 350 }}
        />

    )

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#d9b3ff",
        padding: 10,
        fontWeight: "700",
        borderRadius: 6,
    },
    card: {
        padding: 12,
        margin: 6,
        backgroundColor: "#eee",
        borderRadius: 8,
    },
});

export default ProductSectionList;