import { Colors, FontSizes, Spacings } from "../../constants/theme";
import { Category } from "../../constants/initialProducts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export type CategoryFilterValue = Category | "All";

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

const categories: { name: CategoryFilterValue; icon: IconName }[] = [
  { name: "All", icon: "view-grid" },
  { name: "Fruits", icon: "food-apple" },
  { name: "Meat products", icon: "food-steak" },
  { name: "Sweets", icon: "cake-variant" },
  { name: "Drinks", icon: "cup" },
  { name: "Custom", icon: "plus-circle" },
];

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const CategoryFilterList = ({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) => {
  const handleSelect = (category: CategoryFilterValue) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => {
          const isActive = selectedCategory === category.name;
          const color = isActive ? Colors.surface : Colors.text;

          return (
            <Pressable
              key={category.name}
              onPress={() => handleSelect(category.name)}
              style={({ pressed }) => [
                styles.chip,
                isActive ? styles.chipActive : styles.chipInactive,
                pressed && styles.chipPressed,
              ]}
            >
              <MaterialCommunityIcons name={category.icon} size={20} color={color} />
              <Text style={[styles.chipText, { color }]}>{category.name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacings.large,
  },
  scrollContent: {
    gap: Spacings.large,
  },
  chip: {
    height: 44,
    paddingHorizontal: Spacings.extraLarge,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: Spacings.mediumLarge,
    borderWidth: 1,
  },
  chipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  chipInactive: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
  },
  chipPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  chipText: {
    fontSize: FontSizes.mediumLarge,
    fontWeight: "600",
  },
});