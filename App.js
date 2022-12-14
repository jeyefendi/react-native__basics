import { Text, View } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  padding: 15px;
  border-bottom-width: 2px;
  border-bottom-color: black;
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export default function App() {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Post>
        <PostImage
          source={{
            uri: "https://raw.githubusercontent.com/jeyefendi/jeyefendi/main/public/favicon.webp",
          }}
        />
      </Post>
    </View>
  );
}
