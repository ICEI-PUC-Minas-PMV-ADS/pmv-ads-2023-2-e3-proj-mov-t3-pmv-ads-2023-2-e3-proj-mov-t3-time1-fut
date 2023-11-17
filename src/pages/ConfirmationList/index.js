import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { Container, Content, ContentText, PayButton } from './styles';
import Header from '../../components/Header'

const ConfirmationList = ({ route }) => {
  const { matchId } = route.params;
  [matchData, setMatchData] = useState(null);
  const [timeA, setTimeA] = useState([]);
  const [timeB, setTimeB] = useState([]);

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

  useEffect(() => {
    const matchRef = firestore().collection('matchs').doc(matchId);

    const unsubscribe = matchRef.onSnapshot((documentSnapshot) => {
      if (documentSnapshot.exists) {
        const data = documentSnapshot.data();
        setMatchData(data);
      }
    });

    return () => unsubscribe();
  }, [matchId]);

  if (!matchData) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F1F1'}}>
        <Text style={{
                fontSize: 30,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Arial',
                fontWeight: 'bold',
            }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <Container>
        <Header/>
        <Content> {matchData.TimeA} </Content>
        {timeA.map((player, index) => (
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
            <ContentText key={index}>{player}</ContentText>
          </View> 
        ))}
        

        <Content> {matchData.TimeB} </Content>
        {timeB.map((player, index) => (
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
            <ContentText key={index}>{player}</ContentText>
          </View> 
        ))}
    </Container>
    </ScrollView>
  );
};

export default ConfirmationList;