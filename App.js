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
  Keyboard,
} from "react-native";
import Tasks from "./components/tasks";
export default function App() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const handlechange = () => {
    Keyboard.dismiss();
    setAllTasks([...allTasks, task]);
    setTask(null);
  };

  const handleremove = (index) => {
    let itemcopy = [...allTasks];
    itemcopy.splice(index, 1);
    setAllTasks(itemcopy);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerCompontnets}>
          <Text style={styles.header}>Today's Tasks</Text>
          <Text style={styles.subheader}>Made with : Ahmed Barakat</Text>
        </View>
        {allTasks.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={(index) => handleremove(index)}
          >
            <Tasks text={item} />
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={-500}
          style={styles.container2}
          behavior="padding"
        >
          <TextInput
            placeholder="Write A Task"
            style={styles.input}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity>
            <View style={styles.btncontainer}>
              <Text style={styles.btn} onPress={handlechange}>
                +
              </Text>
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
  headerCompontnets: {
    flexDirection: "column",
    marginLeft: 20,
    marginTop: 94,
    justifyContent: "space-between",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subheader: {
    marginTop: 5,
  },
  container2: {
    marginTop: "90%",
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
