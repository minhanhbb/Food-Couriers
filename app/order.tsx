import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useRouter } from "expo-router";

export default function Order() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Order</Text>
      <Text style={styles.item}>1x Chicken Burger Promo Pack</Text>
      <Text style={styles.total}>Total: $5.99</Text>
      <Button title="Place Order" onPress={() => router.push("/finish")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  item: { fontSize: 16, marginBottom: 10 },
  total: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
});
