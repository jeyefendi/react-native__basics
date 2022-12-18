import React, { useState } from "react";
import {Alert, View } from "react-native";
import { Card } from "./src/components/Card";
import api from "./src/services/api";

export default function App() {
  const [items, setItems] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await api.get('/characters');
      setItems(response);
    } catch (err) {
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось выполнить запрос');
    }
  };

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
