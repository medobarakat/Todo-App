import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tasks from "./components/tasks";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Today's Tasks</Text>
        <Tasks />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  header: {
    fontSize: 24,
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 94,
  },
});
