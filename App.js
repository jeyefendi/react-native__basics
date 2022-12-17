import { Text, View } from "react-native";
import { Card } from "./components/Card";

export default function App() {
  return (
    <View>
      <Card
        title="jeyefendi"
        imageUrl={
          "https://raw.githubusercontent.com/jeyefendi/jeyefendi/main/public/favicon.webp"
        }
      />
    </View>
  );
}
