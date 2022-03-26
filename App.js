import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Tasks from "./components/tasks";
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Today's Tasks</Text>
        <Tasks text={"task 1 "} />
        <Tasks text={"task 2"} />
        <Tasks text={"task 3"} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={-500}
          style={styles.container2}
          behavior="padding"
        >
          <TextInput placeholder="Write A Task" style={styles.input} />
          <TouchableOpacity>
            <View style={styles.btncontainer}>
              <Text style={styles.btn}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
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
    marginTop: "50%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    backgroundColor: "white",
    fontSize: 15,
    width: 260,
    justifyContent: "center",
    borderRadius: 50,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  btncontainer: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  btn: {
    fontSize: 20,
  },
});
