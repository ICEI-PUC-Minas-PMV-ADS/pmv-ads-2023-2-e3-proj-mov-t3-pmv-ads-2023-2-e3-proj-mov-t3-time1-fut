import React, { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../contexts/auth'

function RatingMatch({ route, }) {
  const { matchId } = route.params;
  const { user } = useContext(AuthContext);
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const trophyImgFilled = require('../../assets/trophyFilled.png');
  const trophyImgCorner = require('../../assets/trophyCorner.png');

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}
            >
              <Image
                style={styles.trophyImgStyle}
                source={
                  item <= defaultRating
                    ? trophyImgFilled
                    : trophyImgCorner
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  function handleRating() {

  const matchRegistrationRef = firestore().collection('ratings').doc(matchId);

  // Verificar se o documento já existe
  matchRegistrationRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      // Se o documento existir, atualize o array
      matchRegistrationRef.update({
        nota: defaultRating
      }).then(() => {
        Alert.alert("Sucesso","Avaliação Salva!");
      }).catch((error) => {
        Alert.alert('Erro ao gravar Avaliação:', error);
      });
    } else {
      // Se o documento não existir, crie um novo documento
      matchRegistrationRef.set({
        matchId: matchId,
        avaliador: user.nome,
        nota: defaultRating
      }).then(() => {
        Alert.alert("Sucesso","Avaliação Salva!");
      }).catch((error) => {
        Alert.alert('Erro ao gravar Avaliação:', error);
      });
    }
  }).catch((error) => {
    Alert.alert('Erro ao gravar Avaliação:', error);
  });
  };

  return (
    <SafeAreaView style={styles.container}>

    <Text style={styles.textStyle}> Avalie a Pelada! </Text>
      <CustomRatingBar />
      
      <Text style={styles.textStyle}>
        {defaultRating + ' / ' + maxRating.length}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={handleRating}
      >
        <Text style={styles.textStyleItem}> Enviar </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 20,
  },
  CustomRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  trophyImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 15,
    backgroundColor: 'blue',
  },
  textStyleItem: {
    color: 'white',
  },
});

export default RatingMatch;
