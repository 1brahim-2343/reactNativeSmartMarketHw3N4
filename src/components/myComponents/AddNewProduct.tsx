import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors, FontSizes, Spacings } from "../../constants/theme";
import { useState } from "react";

export default function AddNewProduct({
  addNewItem,
}: {
  addNewItem: (newItemName: string, newItemPrice: number) => void;
}) {
  const [newItemName, setnewItemName] = useState<string>("");
  const [newItemPrice, setnewItemPrice] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View style={styles.titleIcon}>
          <AntDesign name="plus" size={18} color={Colors.surface} />
        </View>
        <Text style={styles.title}>Add new product</Text>
      </View>
      <View style={styles.inputsRow}>
        <View style={styles.inputWrapper}>
          <AntDesign name="tag" size={20} color={Colors.inactive} />
          <TextInput
            style={styles.input}
            placeholder="Product name"
            placeholderTextColor={Colors.textPlaceholder}
            onChangeText={setnewItemName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <AntDesign name="wallet" size={20} color={Colors.inactive} />
          <TextInput
            style={styles.input}
            placeholder="Price (AZN)"
            placeholderTextColor={Colors.textPlaceholder}
            keyboardType="decimal-pad"
            onChangeText={setnewItemPrice}
          />
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => addNewItem(newItemName, parseFloat(newItemPrice))}
      >
        <AntDesign name="plus" size={20} color={Colors.surface} />
        <Text style={styles.buttonText}>Add product</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: Spacings.extraLarge,
    gap: Spacings.large,
    shadowColor: Colors.primary,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacings.large,
  },
  titleIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: FontSizes.large,
    fontWeight: "700",
    color: Colors.text,
  },
  inputsRow: {
    flexDirection: "row",
    gap: Spacings.large,
  },
  inputWrapper: {
    flex: 1,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacings.mediumLarge,
    paddingHorizontal: Spacings.large,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    backgroundColor: Colors.surface,
  },
  input: {
    flex: 1,
    fontSize: FontSizes.medium,
    color: Colors.text,
  },
  button: {
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: Spacings.mediumLarge,
    borderRadius: 14,
    backgroundColor: Colors.primary,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: FontSizes.mediumLarge,
    fontWeight: "700",
    color: Colors.surface,
  },
});
