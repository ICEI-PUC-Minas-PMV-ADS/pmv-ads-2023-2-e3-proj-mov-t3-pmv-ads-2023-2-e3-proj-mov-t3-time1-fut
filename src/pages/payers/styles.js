import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  background-color: #36393F;
  alignItems: center;
`;

export const ListConfirmation = styled.FlatList`
  flex:1;
  background-color: #F1F1F1;
`;


export const Content = styled.Text`
color: #0000FF;
margin: 4px 0;
fontSize: 25px;
fontWeight: bold;
`;

export const ContentText = styled.Text`
color: #ffff;
margin: 4px 0;
fontSize: 20px;
`;

export const PayButton = styled.TouchableOpacity`
width: 45px;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`;