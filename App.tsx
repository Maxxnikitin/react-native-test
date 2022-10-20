import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
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
    <View>
      <StatusBar style="auto" />
      <Navbar title="ToDo" />
      <View style={styles.content}>
        <AddTodo onSubmit={handleAddTodo} />
        <View>
          {todos.map((item) => (
            <Todo key={item.id} data={item}></Todo>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
  },
});
