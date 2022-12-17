import axios from "axios";
import { useEffect, useState } from "react";
import {Alert, View } from "react-native";
import { Card } from "./components/Card";

export default function App() {
  const [items, setItems] = suseState();

  useEffect(() => {
    axios.get("https://api.disneyapi.dev/characters").then(({ data }) => {
      setItems(data);
    })
    .catch((err) => {
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось выполнить запрос')
    })
  });

  return (
    <View>
    {[...items].map((item) => (
      <Card
        title={item.name}
        imageUrl={item.imageUrl}
      />
    ))}
    </View>
  );
}
