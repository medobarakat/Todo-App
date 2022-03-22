import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Tasks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <View style={styles.rectangle}></View>
        <Text style={styles.text}>Likes </Text>
        <View style={styles.circle}></View>
      </View>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({});
