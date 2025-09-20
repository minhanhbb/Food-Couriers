import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 Food Couriers</Text>
      <Button title="Create Account" onPress={() => router.push("/signup")} />
      <Button title="Login" type="secondary" onPress={() => router.push("/login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 40 },
});
