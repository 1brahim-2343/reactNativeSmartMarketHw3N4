import { Product } from "@/constants/initialProducts";
import { Colors, FontSizes, Spacings } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function SubHeader({ cart }: { cart: Product[] }) {
  const cartPrice = cart.reduce((sum, i) => sum + i.price, 0);
  return (
    <View style={styles.subHeaderContainer}>
      <FontAwesome6 name="cart-arrow-down" size={24} color={Colors.primary} />
      <View style={styles.subHeaderTextContainer}>
        <Text style={styles.subHeaderText}>
          In cart: {cart.length} products /{" "}
        </Text>
        <Text
          style={[
            styles.subHeaderText,
            { fontWeight: "bold", color: Colors.primary },
          ]}
        >
          {cartPrice} AZN
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeaderContainer: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryOpacified,
    padding: Spacings.large,
    marginTop: Spacings.large,
    borderRadius: 8,
    gap: Spacings.large,
  },
  subHeaderTextContainer: {
    flexDirection: "row",
  },
  subHeaderText: {
    fontSize: FontSizes.large,
  },
});
