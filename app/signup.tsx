import { ScrollView, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Email address" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Sign Up" onPress={() => router.push("/profile")} />
      <Button title="Sign up with Google" type="secondary" />
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.link}>Already have account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 12, marginBottom: 15 },
  link: { color: "#E91E63", marginTop: 15, textAlign: "center" },
});
