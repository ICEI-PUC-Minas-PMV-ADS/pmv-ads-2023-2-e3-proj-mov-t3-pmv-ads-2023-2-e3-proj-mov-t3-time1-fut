import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Alert  } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { Container, Texto, ButtonText, Button } from './styles'
import Header from '../../components/Header'
import { AuthContext } from '../../contexts/auth'

function Match({ route, navigation }) {
  const { matchId } = route.params;
  const [matchData, setMatchData] = useState(null);
  const { user } = useContext(AuthContext);
  const { TimeA, setTimeA } = useState([]);
  const { TimeB, setTimeB } = useState([]);

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

  function handleJoinTeamA() {
  const matchRef = firestore().collection('matchs').doc(matchId);

  // Adicione o nome do usuário ao array de TimeA no Firestore
  const teste = firestore().collection('matchRegistrations');
  const newDocumentRef = teste.doc();

  newDocumentRef.set({
  matchId : matchId,
  TimeA : [user.nome] // Substitua os itens pelo que desejar
  }).then(() => {
  console.log('Novo documento criado com sucesso');
  }).catch((error) => {
  console.error('Erro ao criar o novo documento:', error);
  });

}


  function handleJoinTeamB() {

    firestore().collection('matchRegistrations')
    .add({
      TimeB: user?.nome
    })
    .then( () => {
      setTeamB('');
    })
    
    Alert.alert("Sucesso", `cadastrado no time ${matchData.TimeB}`);
    
  };

  const handleStartMatch = () => {
    navigation.navigate("StopWatch")   
  };

  const handleRateMatch = () => {
    navigation.navigate("RatingMatch")   
  };

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
    <Container>
      <Header/>
      <Texto>{matchData.TimeA} vs {matchData.TimeB}</Texto>

      <Button bg="#428cfd" onPress={handleJoinTeamA}>
        <ButtonText color="#FFF">Cadastrar em {matchData.TimeA}</ButtonText>
      </Button>

      <Button bg="#428cfd" onPress={handleJoinTeamB}>
        <ButtonText color="#FFF">Cadastrar em {matchData.TimeB}</ButtonText>
      </Button>

      <Button bg="#428cfd" onPress={handleStartMatch}>
        <ButtonText color="#FFF">Iniciar Pelada</ButtonText>
      </Button>

      <Button bg="#428cfd" onPress={handleRateMatch}>
        <ButtonText color="#FFF">Avaliar Pelada</ButtonText>
      </Button>

    </Container>
  );
}


export default Match;