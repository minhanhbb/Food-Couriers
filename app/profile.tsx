import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
        style={styles.avatar}
      />
      <View style={styles.card}>
        <Text style={styles.label}>Your name</Text>
        <Text style={styles.value}>Joyce Johnson</Text>
        <Text style={styles.label}>Occupation</Text>
        <Text style={styles.value}>Manager</Text>
        <Text style={styles.label}>Employer</Text>
        <Text style={styles.value}>Food Couriers</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Phone number</Text>
        <Text style={styles.value}>+234 813 0400 445</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>ekamcy@gmail.com</Text>
      </View>

      <Button title="Edit" onPress={() => router.push("/home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, alignSelf: "center", marginBottom: 20 },
  card: { backgroundColor: "#f9f9f9", padding: 15, borderRadius: 10, marginBottom: 15 },
  label: { fontSize: 14, color: "#666" },
  value: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
});
