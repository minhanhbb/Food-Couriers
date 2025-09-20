import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  type?: "primary" | "secondary";
};

export default function Button({ title, onPress, type = "primary" }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, type === "secondary" && styles.secondary]}
      onPress={onPress}
    >
      <Text style={[styles.text, type === "secondary" && styles.textSecondary]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E91E63",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  secondary: {
    backgroundColor: "#f1f1f1",
  },
  text: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  textSecondary: { color: "#333" },
});
