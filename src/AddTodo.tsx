import React, { FC, useState } from "react";
import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface IAddTodo {
  onSubmit: (title: string) => void;
}

export const AddTodo: FC<IAddTodo> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChangeInput = (text: string) => setValue(text);

  const handleSubmit = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeInput}
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    paddingVertical: 10,
  },
});
