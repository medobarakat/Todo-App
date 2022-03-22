import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Tasks from "./components/tasks";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Today's Tasks</Text>
        <Tasks text={"task 1"} />
        <Tasks text={"task 2"} />
        <Tasks text={"task 3"} />
      </View>
      <View>
        <KeyboardAvoidingView behavior="padding" style={styles.container2}>
          <TextInput placeholder="Write A Task" style={styles.input} />
          <TouchableOpacity>
            <View style={styles.btncontainer}>
              <Text style={styles.btn}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
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
  container2: {
    width: "100%",
    position: "absolute",
    top: 260,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {},
  btncontainer: {},
  btn: {},
});
