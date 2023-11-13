import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Feater from 'react-native-vector-icons/Feather';

import { Container, Content, ContentText, PayButton } from './styles';
import Header from '../../components/Header'

const ConfirmationList = ({ route }) => {
  const { matchId } = route.params;
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

  return (
    <Container>
        <Header/>
        <Content>Time A</Content>
        {timeA.map((player, index) => (
            <ContentText key={index}>{player}</ContentText>
        ))}
        <PayButton>
            <Feater name="check-square" color="#FFF" size={25}/>
        </PayButton>

        <Content>Time B</Content>
        {timeB.map((player, index) => (
            <ContentText key={index}>{player}</ContentText>
        ))}
    </Container>
  );
};

export default ConfirmationList;
/*
return(
    <Container>
      <Header/>
        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F1F1'}}>
        </View>

      { loading ? (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={50} color="#E52246"/>
        </View>
      ) : (
        <ListMatchs
          showsVerticalScrollIndicator={false}
          data={matchs}
          renderItem={ ({ item }) => ( 
            <MatchsList
              data={item}
              userId={user?.uid}
            />
           )  }

           refreshing={loadingRefresh}
           onRefresh={ handleRefreshMatchs }

           onEndReached={() => getListMatchs() }
           onEndReachedThreshold={0.1}

        />
      )}

    </Container>
  )
*/