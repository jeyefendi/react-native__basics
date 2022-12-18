import axios from "axios";
import React from "react";
import {Alert, View } from "react-native";
import { Card } from "./components/Card";

export default function App() {
  const [items, setItems] = React.useState();

  React.useEffect(() => {
    axios
    .get("https://637254d8025414c6370cd9df.mockapi.io/api/characters")
    .then(({ data }) => {
      setItems(data);
    })
    .catch(err => {
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось выполнить запрос');
    });
  }, []);

  return (
    <View>
    {items.map((obj) => (
      <Card
        name={obj.name}
        description={obj.description}
        avatar={obj.avatar}
      />
    ))}
    </View>
  );
}
