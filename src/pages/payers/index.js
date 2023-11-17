import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Container, Content, ContentText, PayButton } from './styles';
import Header from '../../components/Header'

const PaymentList = ({ route }) => {
  const { matchId } = route.params;
  [matchData, setMatchData] = useState(null);
  const [payers, setPayers] = useState([]);

  useEffect(() => {
    const matchRegistrationRef = firestore().collection('payments').doc(matchId);

    matchRegistrationRef.get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        setPayers(data.pagadores || []);
      }
    }).catch((error) => {
      console.error('Erro ao obter informações do registro da partida:', error);
    });
  }, [matchId]);


  return (
    <Container>
        <Header/>
        <Content> Pagadores </Content>
        {payers.map((player, index) => (
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
            <ContentText key={index}>{player}</ContentText>
          </View> 
        ))}
        
    </Container>
  );
};

export default PaymentList;