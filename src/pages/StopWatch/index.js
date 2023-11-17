import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import { Card } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import { Texto, ButtonText, Botao,  } from './styles'

function StopWatch({ route, }){
  const { matchId } = route.params;
  const [matchData, setMatchData] = useState(null);
  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState('VAI');
  const [ultimo, setUltimo] = useState(null);
  const [timer, setTimer] = useState(null);
  const [scoreTeam1, setScoreTeam1] = useState(0);
  const [scoreTeam2, setScoreTeam2] = useState(0);

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

  const vai = () => {
    if (timer !== null) {
      clearInterval(timer);
      setTimer(null);
      setBotao('VAI');
    } else {
      const newTimer = setInterval(() => {
        setNumero((prevNumero) => prevNumero + 0.1);
      }, 100);
      setTimer(newTimer);
      setBotao('PARAR');
    }
  };

  const addGoal = (team) => {
    if (team === 1) {
      setScoreTeam1(scoreTeam1 + 1);
    } else {
      setScoreTeam2(scoreTeam2 + 1);
    }
  };

  const limpar = () => {
    if (timer !== null) {
      clearInterval(timer);
      setTimer(null);
    }

    setUltimo(numero);
    setNumero(0);
    setBotao('VAI');
  };

  useEffect(() => {
    return () => {
      if (timer !== null) {
        clearInterval(timer);
      }
    };
  }, [timer]);

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
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Card containerStyle={{ width: '100%', }}>
          <View style={{ alignItems: 'center' }}>
            <Texto>{scoreTeam1} x {scoreTeam2}</Texto>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Botao onPress={() => addGoal(1)}>
              <ButtonText>Gol {matchData.TimeA}!</ButtonText>
            </Botao>
            <Botao onPress={() => addGoal(2)}>
              <ButtonText>Gol {matchData.TimeB}!</ButtonText>
            </Botao>
          </View>
        </Card>
      </View>
      <Image
        source={require('../../assets/cronometro.png')}
        style={styles.cronometro}
      />
      <Text style={styles.timer}>{numero.toFixed(1)}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}>{botao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {ultimo > 0 ? 'Ultimo tempo: ' + ultimo.toFixed(2) + 's' : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#36393F',
  },
  timer: {
    marginTop: -60,
    marginBottom: 10,
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 50,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 35,
    margin: 10,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaUltima: {
    marginTop: 10,
    marginBottom:10
  },
  textoCorrida: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FFF',
  },
  cronometro: {
    marginTop: 30,
    marginBottom: -40,
    height: '35%',
    width: '40%',
  },
  
});

export default StopWatch;
