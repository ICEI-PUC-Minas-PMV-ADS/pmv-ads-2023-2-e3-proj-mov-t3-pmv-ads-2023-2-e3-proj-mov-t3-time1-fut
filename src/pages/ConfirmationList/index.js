import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Container, Content, ContentText, PayButton } from './styles';
import Header from '../../components/Header'

const ConfirmationList = ({ route }) => {
  const { matchId } = route.params;
  [matchData, setMatchData] = useState(null);
  const [timeA, setTimeA] = useState([]);
  const [timeB, setTimeB] = useState([]);
  const [buttonColor, setButtonColor] = useState('#FFF');
  const [iconColor, setIconColor] = useState('#FFF');

  useEffect(() => {
    const matchRegistrationRef = firestore().collection('matchRegistrations').doc(matchId);

    matchRegistrationRef.get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        setTimeA(data.TimeA || []);
        setTimeB(data.TimeB || []);
      }
    }).catch((error) => {
      console.error('Erro ao obter informações do registro da partida:', error);
    });
  }, [matchId]);

  const handlePayButtonPress = () => {
    const newColor = "#09e010"; 
    setButtonColor(newColor);
    const newIconColor = "#09e010";
    setIconColor(newIconColor);
  };


  return (
    <Container>
        <Header/>
        <Content> Time A </Content>
        {timeA.map((player, index) => (
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
            <ContentText key={index}>{player}</ContentText>
          </View> 
        ))}
        

        <Content> Time B </Content>
        {timeB.map((player, index) => (
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
            <ContentText key={index}>{player}</ContentText>
          </View> 
        ))}
    </Container>
  );
};

export default ConfirmationList;