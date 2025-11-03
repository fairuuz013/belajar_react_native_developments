import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import ProductFlatList from "./src/components/ProductFlatList";
import { fetchProducts } from "./api/fetchProducts"; // <-- exact path + case

export default function App() {
  const [data, setData] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    setRefreshing(true);
    const res = await fetchProducts();
    setData(res);
    setRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ProductFlatList data={data} refreshing={refreshing} onRefresh={loadData} />
    </SafeAreaView>
  );
}
