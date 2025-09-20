import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const products = [
    {
      title: "Chicken burger",
      price: 20,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
      rating: 3.8,
    },
    {
      title: "Cheese burger",
      price: 15,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
      rating: 4.5,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#111" />
        </TouchableOpacity>
        <View style={styles.locationWrap}>
          <Ionicons name="location" size={16} color="red" />
          <Text style={styles.locationText}>Freedom way, Lekki phase</Text>
        </View>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={{ marginRight: 6 }}
        />
        <TextInput placeholder="Search" style={{ flex: 1 }} />
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
          }}
          style={styles.bannerImg}
        />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerText}>Special Offer for March</Text>
          <Text style={styles.bannerSub}>
            We are here with the best deserts in town.
          </Text>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        {[
          { label: "Burger", icon: "fast-food" },
          { label: "Pizza", icon: "pizza" },
          { label: "Sandwich", icon: "restaurant" },
          { label: "Drinks", icon: "cafe" },
        ].map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.category, idx === 0 && styles.categoryActive]}
          >
            <Ionicons
              name={item.icon}
              size={18}
              color={idx === 0 ? "#fff" : "#e91e63"}
            />
            <Text style={[styles.categoryText, idx === 0 && { color: "#fff" }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Products */}
      <View style={styles.productsWrap}>
        {products.map((p, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.productCard}
            onPress={() =>
              router.push({
                pathname: "/product/detail",
                params: {
                  title: p.title,
                  price: p.price,
                  img: p.img,
                  rating: p.rating,
                },
              })
            }
          >
            <Image source={{ uri: p.img }} style={styles.productImg} />
            <Text style={styles.productTitle}>{p.title}</Text>
            <Text style={styles.productSub}>
              100 gr {p.title.toLowerCase()}
            </Text>
            <View style={styles.productBottom}>
              <Text style={styles.price}>${p.price.toFixed(2)}</Text>
              <View style={styles.addBtn}>
                <Ionicons name="add" size={20} color="#fff" />
              </View>
            </View>
            <View style={styles.rating}>
              <Ionicons name="star" size={12} color="orange" />
              <Text style={{ fontSize: 12 }}>{p.rating}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Popular */}
      <View style={styles.popularWrap}>
        <Text style={styles.popularTitle}>Popular Meal Menu</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <TouchableOpacity
        style={styles.popularCard}
        onPress={() =>
          router.push({
            pathname: "/product/detail",
            params: {
              title: "Pepper Pizza",
              price: 15,
              img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
              rating: 4.2,
            },
          })
        }
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
          }}
          style={styles.popularImg}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={{ fontWeight: "600" }}>Pepper Pizza</Text>
          <Text style={{ color: "#999" }}>5kg box of Pizza</Text>
        </View>
        <Text style={styles.popularPrice}>$15</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.popularCard}
        onPress={() =>
          router.push({
            pathname: "/product/detail",
            params: {
              title: "Pepper Pizza",
              price: 15,
              img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
              rating: 4.2,
            },
          })
        }
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
          }}
          style={styles.popularImg}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={{ fontWeight: "600" }}>Pepper Pizza</Text>
          <Text style={{ color: "#999" }}>5kg box of Pizza</Text>
        </View>
        <Text style={styles.popularPrice}>$15</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.popularCard}
        onPress={() =>
          router.push({
            pathname: "/product/detail",
            params: {
              title: "Pepper Pizza",
              price: 15,
              img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
              rating: 4.2,
            },
          })
        }
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
          }}
          style={styles.popularImg}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={{ fontWeight: "600" }}>Pepper Pizza</Text>
          <Text style={{ color: "#999" }}>5kg box of Pizza</Text>
        </View>
        <Text style={styles.popularPrice}>$15</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  topBar: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationWrap: { flexDirection: "row", alignItems: "center" },
  locationText: { fontWeight: "500", marginLeft: 4 },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 12,
  },
  banner: {
    marginTop: 16,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fde4e4",
  },
  bannerImg: { width: "100%", height: 160 },
  bannerContent: { position: "absolute", top: 20, left: 20, right: 20 },
  bannerText: { fontSize: 18, fontWeight: "700", color: "#fff" },
  bannerSub: { color: "#fff", marginVertical: 6 },
  buyBtn: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buyBtnText: { color: "#e91e63", fontWeight: "600" },
  category: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e91e63",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 10,
  },
  categoryActive: {
    backgroundColor: "#e91e63",
  },
  categoryText: { marginLeft: 6, color: "#e91e63", fontWeight: "500" },
  productsWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    flexWrap: "wrap",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    width: "48%",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  productImg: { width: "100%", height: 100, borderRadius: 8 },
  productTitle: { fontWeight: "600", marginTop: 8 },
  productSub: { color: "#999", fontSize: 12 },
  productBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    justifyContent: "space-between",
  },
  price: { fontWeight: "700", fontSize: 14, color: "#e91e63" },
  addBtn: { backgroundColor: "#e91e63", borderRadius: 6, padding: 6 },
  rating: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 6,
    alignItems: "center",
  },
  popularWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  popularTitle: { fontWeight: "700", fontSize: 16 },
  seeAll: { color: "#e91e63" },
  popularCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  popularImg: { width: 60, height: 60, borderRadius: 8 },
  popularPrice: { fontWeight: "700", color: "#e91e63" },
});
