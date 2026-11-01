import AddNewProduct from "@/components/myComponents/AddNewProduct";
import { CategoryFilterList } from "@/components/myComponents/CategoryFilterList";
import Header from "@/components/myComponents/Header";
import Product from "@/components/myComponents/Product";
import SubHeader from "@/components/myComponents/SubHeader";
import {
  Category,
  INITIAL_PRODUCTS,
  Product as ProductType,
} from "@/constants/initialProducts";
import { Colors, Spacings } from "@/constants/theme";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const [cart, setCart] = useState<ProductType[]>([
    { id: "1", price: 17, category: "Custom", name: "a" },
    { id: "1", price: 17, category: "Custom", name: "a" },
  ]);
  const [items, setItems] = useState<ProductType[]>(INITIAL_PRODUCTS);
  // const [filteredItems, setFilteredItems] = useState<ProductType[]>(items);

  const handleAddToCart = (item: ProductType) => {
    setCart([...cart, item]);
    Alert.alert("Cart summary", `Item ${item.name} was added to cart`);
  };

  const handleAddNewItem = (newItemName: string, newItemPrice: number) => {
    if (!newItemName.trim() || newItemPrice <= 0) {
      Alert.alert("Input error", "Invalid input!");
      return;
    }

    const newItem: ProductType = {
      id: `cstm${items.length + 1}`,
      name: newItemName,
      price: newItemPrice,
      category: "Custom",
    };

    setItems([...items, newItem]);
    Keyboard.dismiss();
    Alert.alert("Success!", `${newItemName} was added`);
  };

  const [selecetedCategory, setSelectedCategory] = useState<string>("All");


  const filteredItems = selecetedCategory === "All" ? items : items.filter((p) => p.category === selecetedCategory);

  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Header cart={cart} />
      <SubHeader cart={cart} />
      <CategoryFilterList
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selecetedCategory}
      />
      <AddNewProduct addNewItem={handleAddNewItem} />
      <FlatList
        data={filteredItems}
        key={isPortrait ? "p" : "l"}
        keyExtractor={(item) => item.id}
        numColumns={isPortrait ? 2 : 4}
        columnWrapperStyle={{ gap: Spacings.large }}
        contentContainerStyle={{
          gap: Spacings.large,
          padding: Spacings.extraLarge,
        }}
        renderItem={({ item }) => (
          <Product product={item} addToCart={handleAddToCart} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    marginHorizontal: Spacings.mediumLarge,
  },
});
