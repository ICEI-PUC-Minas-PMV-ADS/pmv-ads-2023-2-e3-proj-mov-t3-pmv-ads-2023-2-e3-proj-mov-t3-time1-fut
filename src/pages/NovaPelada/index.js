import React, { useState, useRef , useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { TextInputMask } from 'react-native-masked-text';

import { AuthContext } from '../../contexts/auth'


function CreateMatch() {
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [matchDate, setMatchDate] = useState('');
  const [matchTime, setMatchTime] = useState('');
  const [matchLocation, setMatchLocation] = useState('');
  const [pix, setPix] = useState('');
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const dataRef = useRef('');
  const horaRef = useRef('');

  async function handleCreateMatch () {
  const isDataValida = dataRef.current.isValid();
  const isHoraValida = horaRef.current.isValid();

    if (teamA === '' || teamB === '') {
      Alert.alert("Erro", "Por favor, insira os nomes dos dois times.");
      return;
    }
    
    if(isDataValida === false){
      Alert.alert("Erro", "Por favor, insira uma data valida!");
      return;
    }

    if(isHoraValida === false){
      Alert.alert("Erro", "Por favor, insira um horario valido!");
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
      matchDate: matchDate,
      pix: pix
    })
    .then( () => {
      setTeamA('');
      setTeamB('');
      setMatchDate('');
      setMatchTime('');
      setMatchLocation('');
      setPix('');
      Alert.alert("Sucesso", `Partida criada entre ${teamA} e ${teamB}!`);
    })
    .then( () => {
      setTeamA('');
      setTeamB('');
    })
    .catch((error)=>{
      Alert.alert("Erro", "Erro ao criar partida!");
    })
    navigation.goBack();
    
  };


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
      <TextInputMask
        placeholder="Data da pelada"
        value={matchDate}
        ref={dataRef}
        onChangeText={ text => setMatchDate(text) }
        style={styles.input}
        keyboardType='numeric'
        type='datetime'
        options={{
        format: 'DD/MM/YYYY'
        }}
      />
      <TextInputMask
        placeholder="Horario da pelada"
        value={matchTime}
        ref={horaRef}
        onChangeText={ text => setMatchTime(text)}
        style={styles.input}
        keyboardType='numeric'
        type='datetime'
        options={{
        format: 'HH:mm'
        }}
      />
      <TextInput
        placeholder="Local da pelada"
        value={matchLocation}
        onChangeText={setMatchLocation}
        style={styles.input}
      />
      <TextInput
        placeholder="Chave PIX"
        value={pix}
        onChangeText={setPix}
        style={styles.input}
      />
      <Button title="Criar Partida" onPress={handleCreateMatch} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default CreateMatch;