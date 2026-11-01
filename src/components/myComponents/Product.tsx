import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product as ProductType } from "../../constants/initialProducts";
import { Colors, FontSizes, Spacings } from "../../constants/theme";

export default function Product({
  product,
  addToCart,
}: {
  product: ProductType;
  addToCart: (product: ProductType) => void;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.infoRow}>
        {product.image ? (
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.image, styles.imagePlaceholder]}>
            <AntDesign name="shopping-cart" size={24} color={Colors.inactive} />
          </View>
        )}
        <View style={styles.textColumn}>
          <Text style={styles.name} numberOfLines={2}>
            {product.name}
          </Text>
          <Text style={styles.price}>{product.price.toFixed(2)} AZN</Text>
        </View>
      </View>
      <Pressable
        onPress={() => addToCart(product)}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <AntDesign name="plus" size={18} color={Colors.surface} />
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: Spacings.large,
    gap: Spacings.large,
    shadowColor: Colors.primary,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacings.large,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  imagePlaceholder: {
    backgroundColor: Colors.surfaceSecondary,
    justifyContent: "center",
    alignItems: "center",
  },
  textColumn: {
    flex: 1,
    gap: Spacings.small,
  },
  name: {
    fontSize: FontSizes.medium,
    fontWeight: "600",
    color: Colors.text,
  },
  price: {
    fontSize: FontSizes.mediumLarge,
    fontWeight: "700",
    color: Colors.price,
  },
  button: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: Spacings.mediumLarge,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: FontSizes.medium,
    fontWeight: "700",
    color: Colors.surface,
  },
});