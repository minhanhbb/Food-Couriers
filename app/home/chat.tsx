import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const chats = [
  {
    id: "1",
    name: "Burger Factory",
    message: "Your order is ready for pickup 🍔",
    time: "10:45 AM",
    avatar: "https://img.icons8.com/emoji/96/hamburger-emoji.png",
    unread: 2,
  },
  {
    id: "2",
    name: "Pizza Palace",
    message: "We’ve applied a discount for you! 🍕",
    time: "Yesterday",
    avatar: "https://img.icons8.com/emoji/96/pizza-emoji.png",
    unread: 0,
  },
  {
    id: "3",
    name: "Hot Cool Spot",
    message: "Spicy Shawarma delivered 🌯",
    time: "Mon",
    avatar: "https://img.icons8.com/emoji/96/taco-emoji.png",
    unread: 1,
  },
];

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem {...item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

function ChatItem({
  name,
  message,
  time,
  avatar,
  unread,
}: {
  name: string;
  message: string;
  time: string;
  avatar: string;
  unread: number;
}) {
  return (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {message}
        </Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.time}>{time}</Text>
        {unread > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 20 },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    marginTop: 25,
    paddingHorizontal: 16,
    color: "#111",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  avatar: { width: 52, height: 52, borderRadius: 26, marginRight: 14 },
  name: { fontSize: 16, fontWeight: "600", color: "#111" },
  message: { fontSize: 14, color: "#666", marginTop: 2 },
  time: { fontSize: 12, color: "#999" },
  badge: {
    backgroundColor: "#ff3b30",
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
    paddingHorizontal: 5,
  },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "700" },
});
