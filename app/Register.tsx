import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/food.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Tab: Register / Login */}
      <View style={styles.tab}>
        <Text style={[styles.tabText, styles.active]}>Create Account</Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.tabText}>Login</Text>
        </TouchableOpacity>
      </View>

      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Email address" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      {/* Sign up button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/home")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Google sign up */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Sign up with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  image: { width: "100%", height: 200, marginBottom: 10 },
  tab: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tabText: { fontSize: 18, fontWeight: "600", color: "#888" },
  active: {
    color: "#e91e63",
    borderBottomWidth: 2,
    borderBottomColor: "#e91e63",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#e91e63",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  googleButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  googleText: { fontSize: 16, color: "#444" },
});
