import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  align-items: center;
  background-color: #353840;
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