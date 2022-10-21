import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TTodo } from "../App";

interface ITodoComponent {
  data: TTodo;
}

export const Todo: FC<ITodoComponent> = ({ data }) => {
  return (
    <TouchableOpacity>
      <View style={styles.todo}>
        <Text>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    borderColor: "#eee",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});
