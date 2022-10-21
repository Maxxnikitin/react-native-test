import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import { AddTodo } from "./src/AddTodo";
import { Navbar } from "./src/Navbar";
import { Todo } from "./src/Todo";

export type TTodo = {
  id: string;
  title: string;
};

export default function App() {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const handleAddTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  return (
    <View style={styles.allScreen}>
      <StatusBar style="auto" />
      <Navbar title="ToDo" />
      <View style={styles.content}>
        <AddTodo onSubmit={handleAddTodo} />
        <FlatList
          style={styles.list}
          keyExtractor={({ id }) => id}
          data={todos}
          renderItem={({ item }) => <Todo data={item}></Todo>}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    backgroundColor: "pink",
  },
  list: {
    // height: "80%",
  },
  allScreen: {
    backgroundColor: "lightblue",
  },
});
