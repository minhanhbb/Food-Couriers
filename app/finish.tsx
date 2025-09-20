import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useRouter } from "expo-router";

export default function Finish() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Order Successful!</Text>
      <Text style={styles.subtitle}>Thank you for ordering with Food Couriers.</Text>
      <Button title="Back to Home" onPress={() => router.push("/home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 30, textAlign: "center" },
});
