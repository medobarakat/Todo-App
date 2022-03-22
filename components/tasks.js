import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Tasks = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.rectangle}></View>
        <Text style={styles.text}>{text} </Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  rectangle: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    fontSize: 14,
    maxWidth: "80%",
    textTransform: "capitalize",
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
  },
});
