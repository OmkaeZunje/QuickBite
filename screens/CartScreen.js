import React from "react";
import { View, Text, Button } from "react-native";
import { CartContext } from "../context/CartContext";



const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart } = useCart(); // ✅ Get cart and removeFromCart function

  return (
    <View>
      <Text>Cart Screen</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        cart.map((item) => (
          <View key={item.id}>
            <Text>{item.name} - ₹{item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        ))
      )}
      <Button title="Go to Payment" onPress={() => navigation.navigate("Payment")} />
    </View>
  );
};

export default CartScreen;
