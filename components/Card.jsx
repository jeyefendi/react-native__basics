import styled from "styled-components/native";

const CardView = styled.View`
  flex-direction: row;
  paddingTop: 48px;
  border-bottom-width: 2px;
  border-bottom-color: black;
  border-bottom-style: solid;
`;

const CardImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

export const Card = ({ title, imageUrl, createdAt }) => {
    return <CardView>
        <CardImage
          source={{
            uri: imageUrl,
          }}
        />
        <CardTitle>{title}</CardTitle>
      </CardView>
}