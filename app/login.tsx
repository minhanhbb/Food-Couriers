import { ScrollView, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email address" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button title="Login" onPress={() => router.push("/home")} />
      <Button title="Login with Google" type="secondary" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 12, marginBottom: 15 },
  forgot: { color: "#E91E63", textAlign: "right", marginBottom: 15 },
});
