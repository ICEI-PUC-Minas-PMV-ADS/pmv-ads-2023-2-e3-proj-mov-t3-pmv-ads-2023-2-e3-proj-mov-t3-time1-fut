import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Clipboard from '@react-native-clipboard/clipboard';

import { Container, Texto, ButtonText, Button } from './styles'
import Header from '../../components/Header'
import { AuthContext } from '../../contexts/auth'

function Match({ route, navigation }) {
  const { matchId } = route.params;
  const [matchData, setMatchData] = useState(null);
  const { user } = useContext(AuthContext);
  const [copied, setCopied] = useState(false);

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

  const handleCopyToClipboard = () => {
    Clipboard.setString(matchData.pix);
    setCopied(true);

    // Resetar o estado para false após alguns segundos para fornecer feedback visual
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

function handleJoinTeamA() {

  const matchRegistrationRef = firestore().collection('matchRegistrations').doc(matchId);

  // Verificar se o documento já existe
  matchRegistrationRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      // Se o documento existir, atualize o array TimeA
      matchRegistrationRef.update({
        TimeA: firestore.FieldValue.arrayUnion(user.nome)
      }).then(() => {
        Alert.alert("Sucesso", `Cadastrado no time ${matchData.TimeA}`);
      }).catch((error) => {
        Alert.alert('Erro ao adicionar usuário ao TimeA:', error);
      });
    } else {
      // Se o documento não existir, crie um novo documento
      matchRegistrationRef.set({
        matchId: matchId,
        TimeA: [user.nome]
      }).then(() => {
        Alert.alert("Sucesso", `Cadastrado no time ${matchData.TimeA}`);
      }).catch((error) => {
        Alert.alert('Erro ao adicionar usuário ao TimeA:', error);
      });
    }
  }).catch((error) => {
    Alert.alert('Erro ao adicionar usuário ao TimeA:', error);
  });
  
}


function handleJoinTeamB() {

  const matchRegistrationRef = firestore().collection('matchRegistrations').doc(matchId);

  // Verificar se o documento já existe
  matchRegistrationRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      // Se o documento existir, atualize o array TimeB
      matchRegistrationRef.update({
        TimeB: firestore.FieldValue.arrayUnion(user.nome)
      }).then(() => {
        Alert.alert("Sucesso", `Cadastrado no time ${matchData.TimeB}`); 
      }).catch((error) => {
        Alert.alert('Erro ao adicionar usuário ao TimeB:', error);
      });
    } else {
      // Se o documento não existir, crie um novo documento
      matchRegistrationRef.set({
        matchId: matchId,
        TimeB: [user.nome]
      }).then(() => {
        Alert.alert("Sucesso", `Cadastrado no time ${matchData.TimeB}`); 
      }).catch((error) => {
        Alert.alert('Erro ao adicionar usuário ao TimeB:', error);
      });
    }
  }).catch((error) => {
    Alert.alert('Erro ao adicionar usuário ao TimeB:', error);
  });
  };

  function handlePayments() {

  const matchRegistrationRef = firestore().collection('payments').doc(matchId);

  // Verificar se o documento já existe
  matchRegistrationRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      // Se o documento existir, atualize o array
      matchRegistrationRef.update({
        pagadores: firestore.FieldValue.arrayUnion(user.nome)
      }).then(() => {
        Alert.alert("Pagamento confirmado com sucesso");
      }).catch((error) => {
        Alert.alert('Erro ao confirmar Pagamento:', error);
      });
    } else {
      // Se o documento não existir, crie um novo documento
      matchRegistrationRef.set({
        matchId: matchId,
        pagadores: [user.nome]
      }).then(() => {
        Alert.alert("Pagamento confirmado com sucesso");
      }).catch((error) => {
        Alert.alert('Erro ao confirmar Pagamento:', error);
      });
    }
  }).catch((error) => {
    Alert.alert('Erro ao confirmar Pagamento:', error);
  });
  };

  const handleStartMatch = () => {
    navigation.navigate("StopWatch", { matchId: matchId})
  };

  const handleRateMatch = () => {
    navigation.navigate("RatingMatch", { matchId: matchId})   
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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

      <Button bg="#428cfd" onPress={() => navigation.navigate("ConfirmationList", { matchId: matchId})}>
        <ButtonText color="#FFF">Lista de Presença</ButtonText>
      </Button>

      <Button bg="#428cfd" onPress={() => navigation.navigate("PaymentList", { matchId: matchId})}>
        <ButtonText color="#FFF">Lista de Pagamento</ButtonText>
      </Button>

      <Button bg="#429e09" onPress={handlePayments}>
        <ButtonText color="#FFF">Confirmar Pagamento</ButtonText>
      </Button>

      <Button bg="#428cfd" onPress={handleRateMatch}>
        <ButtonText color="#FFF">Avaliar Pelada</ButtonText>
      </Button>

      <View style={styles.pixContainer}>
        <Text style={styles.pixText}>Chave Pix: {matchData.pix}</Text>
        <TouchableOpacity style={styles.copyButton} onPress={handleCopyToClipboard}>
          <Text style={styles.buttonText}>{copied ? 'Copiado!' : 'Copiar'}</Text>
        </TouchableOpacity>
      </View>
    </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pixContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  pixText: {
    marginLeft: '10%',
    flex: 1,
    fontSize: 20,
    color: '#FFF',
  },
  copyButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginRight: '10%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Match;