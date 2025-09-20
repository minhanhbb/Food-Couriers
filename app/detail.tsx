import { ScrollView, Image, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useRouter } from "expo-router";

export default function Detail() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: "https://picsum.photos/400/250" }} style={styles.image} />
      <Text style={styles.title}>Chicken Burger Promo Pack</Text>
      <Text style={styles.rating}>⭐ 4.8 Rating • 7000+ Orders</Text>
      <Text style={styles.desc}>
        Juicy chicken burger served with fresh fries and a cold drink. Limited time promo pack!
      </Text>
      <Button title="Add To Cart" onPress={() => router.push("/order")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 220, borderRadius: 12, marginBottom: 15 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  rating: { color: "#E91E63", marginBottom: 15 },
  desc: { fontSize: 14, color: "#444", marginBottom: 20 },
});
