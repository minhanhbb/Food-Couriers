import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function DetailScreen() {
  const { title, price, img, rating, category } = useLocalSearchParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      {/* Product image */}
      <Image source={{ uri: img as string }} style={styles.image} />

      {/* Back button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
      </TouchableOpacity>

      {/* Favorite button */}
      <TouchableOpacity
        style={styles.favoriteBtn}
        onPress={() => setIsFavorite(!isFavorite)}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={22}
          color={isFavorite ? "#e91e63" : "#fff"}
        />
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        {/* Category */}
        <Text style={styles.category}>{category || "Fast Food"}</Text>

        {/* Title & Price */}
        <View style={styles.rowBetween}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>

        {/* Rating + Location */}
        <View style={styles.row}>
          <Ionicons name="star" size={16} color="orange" />
          <Text style={styles.rating}>{rating}</Text>
          <Ionicons
            name="location"
            size={16}
            color="#e91e63"
            style={{ marginLeft: 16 }}
          />
          <Text style={styles.location}>2 km away</Text>
        </View>

        {/* Description */}
        <Text style={styles.desc}>
          {title} made with fresh ingredients and authentic taste. Perfectly
          cooked to give you the best experience. Our chefs have prepared this
          with love ❤️. Ideal for lunch, dinner or even a quick snack!
        </Text>

        {/* Quantity Selector */}
        <View style={styles.quantityWrap}>
        </View>

        {/* Add to cart */}
        <TouchableOpacity style={styles.addCartBtn}>
          <Text style={styles.addCartText}>
            Add To Chart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 280 },
  backBtn: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 20,
  },
  favoriteBtn: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 20,
  },
  content: { padding: 16 },
  category: {
    fontSize: 14,
    color: "#e91e63",
    fontWeight: "600",
    marginBottom: 4,
  },
  row: { flexDirection: "row", alignItems: "center", marginVertical: 6 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between" },
  title: { fontSize: 22, fontWeight: "700", flex: 1, marginRight: 12 },
  price: { fontSize: 20, color: "#e91e63", fontWeight: "700" },
  rating: { fontSize: 14, color: "#555", marginLeft: 4 },
  location: { fontSize: 14, color: "#777", marginLeft: 4 },
  desc: { fontSize: 14, color: "#666", lineHeight: 20, marginTop: 10 },
  quantityWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  qtyBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 6,
    borderRadius: 6,
  },
  qtyText: { marginHorizontal: 16, fontSize: 16, fontWeight: "600" },
  addCartBtn: {
    backgroundColor: "#e91e63",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  addCartText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
