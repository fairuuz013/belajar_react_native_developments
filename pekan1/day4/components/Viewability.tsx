import React, { useState, useRef } from 'react';
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    Alert,
    RefreshControl
} from 'react-native';

// ✨ Import type biar TS ga ngamuk
import type { ViewToken } from 'react-native';

const DATA = Array.from({ length: 100 }, (_, i) => ({
    id: i.toString(),
    title: `Item ${i}`
}));

const FlatListExample = () => {
    const [refreshing, setRefreshing] = useState(false);

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    };

    // ✅ proper useRef + typing
    const onViewableItemsChanged = useRef(
        ({ viewableItems }: { viewableItems: ViewToken[] }) => {
            if (viewableItems.length > 0) {
                Alert.alert(
                    'Visible Item',
                    `Item ${viewableItems[0].item.title} kelihatan bro 👀`
                );
            }
        }
    ).current;

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1500);
    };

    // ✅ getItemLayout bener + no error
    const getItemLayout = (_: unknown, index: number) => ({
        length: 50,
        offset: 50 * index,
        index
    });

    return (
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text>{item.title}</Text>
                </View>
            )}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            getItemLayout={getItemLayout}
            initialNumToRender={10}
            viewabilityConfig={viewabilityConfig}
            onViewableItemsChanged={onViewableItemsChanged}
            ListHeaderComponent={<Text style={styles.header}>Daftar Item</Text>}
            ListFooterComponent={<Text style={styles.footer}>Akhir Daftar</Text>}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    header: {
        padding: 16,
        fontWeight: 'bold',
        fontSize: 18
    },
    footer: {
        padding: 16,
        textAlign: 'center',
        color: 'gray'
    }
});

export default FlatListExample;
