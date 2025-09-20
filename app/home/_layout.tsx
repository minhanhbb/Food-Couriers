import React from "react";
import { Tabs } from "expo-router";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route: any, idx: number) => {
          const focused = state.index === idx;
          const name = route.name;

          // map route -> icon + label
          let iconName = "home-outline";
          let label = name === "index" ? "Home" : name.charAt(0).toUpperCase() + name.slice(1);

          if (name === "cart") iconName = "cart-outline";
          if (name === "profile") iconName = "person-outline";
          if (name === "chat") iconName = "chatbubble-outline";

          const onPress = () => {
            navigation.navigate(route.name);
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              activeOpacity={0.85}
              style={styles.tabItem}
            >
              {focused ? (
                <View style={styles.activePill}>
                  <View style={styles.iconCircle}>
                    <Ionicons name={iconName.replace("-outline", "")} size={18} color="#fff" />
                  </View>
                  <Text style={styles.activeLabel}>{label}</Text>
                  {name === "cart" && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>7</Text>
                    </View>
                  )}
                </View>
              ) : (
                <Ionicons name={iconName} size={22} color="#ff6b81" />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />} 
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="cart" options={{ title: "Cart" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    paddingBottom: Platform.OS === "ios" ? 18 : 12,
    backgroundColor: "transparent",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
  },
  tabItem: { flex: 1, alignItems: "center" },
  activePill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fdebf1",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
  },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#ff6b81",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  activeLabel: { fontWeight: "600", color: "#111", fontSize: 14 },
  badge: {
    position: "absolute",
    right: -6,
    top: -8,
    backgroundColor: "#ff3b30",
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: { color: "#fff", fontSize: 10, fontWeight: "700" },
});
