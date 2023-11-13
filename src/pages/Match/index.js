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

  const matchRegistrationRef = firestore().collection('matchRegistrations').doc(matchId);

  // Verificar se o documento já existe
  matchRegistrationRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      // Se o documento existir, atualize o array TimeA
      matchRegistrationRef.update({
        TimeA: firestore.FieldValue.arrayUnion(user.nome)
      }).then(() => {
        console.log('Usuário adicionado ao TimeA com sucesso');
      }).catch((error) => {
        console.error('Erro ao adicionar usuário ao TimeA:', error);
      });
    } else {
      // Se o documento não existir, crie um novo documento
      matchRegistrationRef.set({
        matchId: matchId,
        TimeA: [user.nome]
      }).then(() => {
        console.log('Novo documento criado com sucesso');
      }).catch((error) => {
        console.error('Erro ao criar o novo documento:', error);
      });
    }
  }).catch((error) => {
    console.error('Erro ao verificar a existência do documento:', error);
  });
  Alert.alert("Sucesso", `cadastrado no time ${matchData.TimeA}`);
}


function handleJoinTeamB() {

  const matchRegistrationRef = firestore().collection('matchRegistrations').doc(matchId);

  // Verificar se o documento já existe
  matchRegistrationRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      // Se o documento existir, atualize o array TimeA
      matchRegistrationRef.update({
        TimeB: firestore.FieldValue.arrayUnion(user.nome)
      }).then(() => {
        console.log('Usuário adicionado ao TimeA com sucesso');
      }).catch((error) => {
        console.error('Erro ao adicionar usuário ao TimeB:', error);
      });
    } else {
      // Se o documento não existir, crie um novo documento
      matchRegistrationRef.set({
        matchId: matchId,
        TimeB: [user.nome]
      }).then(() => {
        console.log('Novo documento criado com sucesso');
      }).catch((error) => {
        console.error('Erro ao criar o novo documento:', error);
      });
    }
  }).catch((error) => {
    console.error('Erro ao verificar a existência do documento:', error);
  });
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

      <Button bg="#428cfd" onPress={() => navigation.navigate("ConfirmationList", { matchId: matchId})}>
        <ButtonText color="#FFF">Lista de Presença</ButtonText>
      </Button>



    </Container>
  );
}


export default Match;