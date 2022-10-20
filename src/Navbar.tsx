import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface INavbar {
  title: string;
}

export const Navbar: FC<INavbar> = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 100,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "blue",
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 28,
  },
});
