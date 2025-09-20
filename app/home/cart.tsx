import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const cartItemsData = [
  {
    id: "1",
    name: "Chicken Burger",
    shop: "Burger Factory LTD",
    price: 20,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
  },
  {
    id: "2",
    name: "Onion Pizza",
    shop: "Pizza Palace",
    price: 15,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
  },
  {
    id: "3",
    name: "Spicy Shawarma",
    shop: "Hot Cool Spot",
    price: 15,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
  },
  ,
  {
    id: "4",
    name: "Spicy Shawarma",
    shop: "Hot Cool Spot",
    price: 15,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
  },
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(
    cartItemsData.map((item) => ({ ...item, qty: 1 }))
  );

  const updateQty = (id: string, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc" ? item.qty + 1 : item.qty > 1 ? item.qty - 1 : 1,
            }
          : item
      )
    );
  };

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const delivery = 10;
  const discount = 0;
  const total = subTotal + delivery - discount;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Order details</Text>

      {cartItems.map((item) => (
        <View key={item.id} style={styles.itemCard}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemShop}>{item.shop}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
          <View style={styles.qtyContainer}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => updateQty(item.id, "dec")}
            >
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{item.qty}</Text>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => updateQty(item.id, "inc")}
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Summary */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Sub-Total <Text>${subTotal}</Text>
        </Text>
        <Text style={styles.summaryText}>
          Delivery Charge <Text>${delivery}</Text>
        </Text>
        <Text style={styles.summaryText}>
          Discount <Text>${discount}</Text>
        </Text>
        <Text style={styles.totalText}>
          Total <Text style={{ color: "#fff" }}>${total}</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.orderBtn}>
        <Text style={styles.orderBtnText}>Place My Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20, marginTop: 25 },

  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  itemImage: { width: 60, height: 60, borderRadius: 8 },
  itemName: { fontSize: 16, fontWeight: "600" },
  itemShop: { fontSize: 12, color: "#777" },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff3b30",
    marginTop: 4,
  },

  qtyContainer: { flexDirection: "row", alignItems: "center" },
  qtyBtn: {
    backgroundColor: "#fdebf1",
    borderRadius: 6,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnText: { color: "#ff3b30", fontSize: 18, fontWeight: "bold" },
  qtyText: { marginHorizontal: 8, fontSize: 16 },

  summary: {
    marginTop: 20,
    backgroundColor: "#ff3b30",
    borderRadius: 16,
    padding: 16,
  },
  summaryText: { color: "#fff", fontSize: 14, marginBottom: 6 },
  totalText: { color: "#fff", fontSize: 18, fontWeight: "bold", marginTop: 8 },

  orderBtn: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ff3b30",
  },
  orderBtnText: { color: "#ff3b30", fontSize: 16, fontWeight: "bold" },
});
