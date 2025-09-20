import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=12", // avatar demo
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@gmail.com</Text>
      </View>

      {/* Menu list */}
      <View style={styles.menu}>
        <MenuItem icon="receipt-outline" label="My Orders" />
        <MenuItem icon="card-outline" label="Payment Methods" />
        <MenuItem icon="settings-outline" label="Settings" />
        <MenuItem icon="help-circle-outline" label="Help & Support" />
        <MenuItem icon="log-out-outline" label="Logout" last />
      </View>
    </ScrollView>
  );
}

function MenuItem({
  icon,
  label,
  last,
}: {
  icon: any;
  label: string;
  last?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[styles.menuItem, last && { borderBottomWidth: 0 }]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          name={icon}
          size={22}
          color="#ff6b81"
          style={{ marginRight: 14 }}
        />
        <Text style={styles.menuLabel}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#bbb" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    marginTop: 35,
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#fdebf1",
    marginBottom: 16,
  },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: "600", color: "#111" },
  email: { fontSize: 14, color: "#666" },

  menu: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  menuLabel: { fontSize: 15, color: "#333" },
});
