import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const foods = [
  { id: "1", name: "Burger King", price: "$5.99" },
  { id: "2", name: "Fried Rice", price: "$4.50" },
  { id: "3", name: "Noodles Box", price: "$6.25" },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Foods</Text>
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => router.push("/detail")}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: "#eee" },
  name: { fontSize: 16, fontWeight: "500" },
  price: { fontSize: 14, color: "#E91E63" },
});
