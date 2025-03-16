import React from "react";
import { View, Text, Button } from "react-native";
import { useCart } from "./context/CartContext"; // ✅ Import useCart

const MenuScreen = ({ navigation }) => {
  const { addToCart } = useCart(); // ✅ Get addToCart function

  const handleAddToCart = () => {
    const newItem = { id: 1, name: "Burger", price: 50 }; // Example item
    addToCart(newItem);
  };

  return (
    <View>
      <Text>Menu Screen</Text>
      <Button title="Add Burger to Cart" onPress={handleAddToCart} />
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
};

export default MenuScreen;
