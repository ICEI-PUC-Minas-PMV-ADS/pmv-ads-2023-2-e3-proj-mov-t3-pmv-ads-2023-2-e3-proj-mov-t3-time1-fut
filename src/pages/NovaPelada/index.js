import React, { useState, useLayoutEffect, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { AuthContext } from '../../contexts/auth'


function CreateMatch() {
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [matchDate, setMatchDate] = useState('');
  const [matchTime, setMatchTime] = useState('');
  const [matchLocation, setMatchLocation] = useState('');
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  async function handleCreateMatch () {
    if (teamA === '' || teamB === '') {
      Alert.alert("Erro", "Por favor, insira os nomes dos dois times.");
      return;
    }

    let avatarUrl = null;

    try{
      let response = await storage().ref('users').child(user?.uid).getDownloadURL();
      avatarUrl = response;

    }catch(err){
      avatarUrl = null;
    }

    await firestore().collection('matchs')
    .add({
      created: new Date(),
      TimeA: teamA,
      TimeB: teamB,
      autor: user?.nome,
      userId: user?.uid,
      avatarUrl,
      matchLocation: matchLocation,
      matchTime: matchTime,
      matchDate: matchDate
    })
    .then( () => {
      setTeamA('');
      setTeamB('');
      setMatchDate('');
      setMatchTime('');
      setMatchLocation('');
      Alert.alert("Sucesso", `Partida criada entre ${teamA} e ${teamB}!`);
    })
    .catch((error)=>{
      Alert.alert("Erro", "Erro ao criar partida!");
    })
    navigation.goBack();
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do Time A"
        value={teamA}
        onChangeText={setTeamA}
        style={styles.input}
      />
      <TextInput
        placeholder="Nome do Time B"
        value={teamB}
        onChangeText={setTeamB}
        style={styles.input}
      />
      <TextInput
        placeholder="Data da pelada"
        value={matchDate}
        onChangeText={setMatchDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Horario da pelada"
        value={matchTime}
        onChangeText={setMatchTime}
        style={styles.input}
      />
      <TextInput
        placeholder="Local da pelada"
        value={matchLocation}
        onChangeText={setMatchLocation}
        style={styles.input}
      />
      <Button title="Criar Partida" onPress={handleCreateMatch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 40,
    paddingHorizontal: 8,
  },
});

export default CreateMatch;