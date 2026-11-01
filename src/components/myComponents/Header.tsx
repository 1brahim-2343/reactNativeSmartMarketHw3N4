import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors, FontSizes, Spacings } from "@/constants/theme";
import { Product } from "@/constants/initialProducts";

export default function Header({ cart }: { cart: Product[] }) {
  return (
    <View style={styles.header}>
      <View style={styles.subHeader}>
        <MaterialCommunityIcons
          name="cart-arrow-right"
          size={48}
          color={Colors.primary}
        />
        <View>
          <Text style={styles.headerMainText}>Smart market</Text>
          <Text style={styles.headerSubText}>Smarter shopping!</Text>
        </View>
      </View>
      <View style={styles.headerRightCartContainer}>
        <Feather name="shopping-cart" size={40} color="black" />
        {cart.length !== 0 && (
          <Text style={styles.headerCartNotificaitonText}>{cart.length}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacings.mediumLarge,
  },
  headerMainText: {
    fontSize: FontSizes.xLarge,
    fontWeight: 700,
  },
  headerSubText: {
    color: Colors.textSecondary,
  },
  headerRightCartContainer: {
    position: "relative",
  },
  headerCartNotificaitonText: {
    color: "#fff",
    position: "absolute",
    right: -5,
    top: -3,
    backgroundColor: Colors.cartBadge,
    width: 20,
    height: 20,
    borderRadius: 10,
    textAlign: "center",
  },
});
