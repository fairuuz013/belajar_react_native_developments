import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

interface Product {
    product_name?: string;
    code?: string | number;
}

interface Props {
    data: Product[];
    refreshing: boolean;
    onRefresh: () => void;
}

const ProductFlatList: React.FC<Props> = ({ data, refreshing, onRefresh }) => {
    return (
        <FlatList<Product>
            data={data}
            keyExtractor={(item, i) => (item.code ? String(item.code) : i.toString())}
            initialNumToRender={5}
            removeClippedSubviews={true} // <-- correct spelling
            refreshing={refreshing}
            onRefresh={onRefresh}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Text>{item.product_name || "No Name"}</Text>
                </View>
            )}
            contentContainerStyle={{ paddingBottom: 120 }}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 12,
        margin: 6,
        backgroundColor: "#eee",
        borderRadius: 8,
    },
});

export default ProductFlatList;
