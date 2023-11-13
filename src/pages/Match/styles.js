import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  background-color: #36393F;
  alignItems: center;
`;

export const ListMatchs = styled.FlatList`
  flex:1;
  background-color: #F1F1F1;
`;

export const Texto = styled.Text`
  color: #f0f0f0;
  font-size: 30px;
  font-weight: bold;
  alignItems: center;
  justifyContent: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${props => props.color};
`;

export const Button = styled.TouchableOpacity`
margin-top: 16px;
background-color: ${props => props.bg};
width: 80%;
height: 50px;
border-radius: 4px;
align-items: center;
justify-content: center;
`;