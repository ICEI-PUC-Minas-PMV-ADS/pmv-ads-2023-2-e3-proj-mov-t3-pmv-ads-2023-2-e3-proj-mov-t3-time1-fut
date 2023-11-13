import React, { useState, useContext, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'
import firestore from '@react-native-firebase/firestore';

import { Container, ListMatchs } from './styles';
import MatchsList from '../../components/MatchsList';

import Header from '../../components/Header'

function MyMatchs(){
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const [matchs, setMatchs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [lastItem, setLastItem] = useState('');
  const [emptyList, setEmptyList] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      function fetchMatchs(){
        firestore().collection('matchs')
        .where('userId', '==', user.uid) // Filtrar partidas pelo ID do usuário logado
        .orderBy('created', 'desc')
        .limit(5)
        .get()
        .then((snapshot) => {

          if(isActive){
            setMatchs([]);
            const matchsList = [];

            snapshot.docs.map( u => {
              matchsList.push({
                ...u.data(),
                id: u.id,
              })
            })

            setEmptyList(!!snapshot.empty)
            setMatchs(matchsList);
            setLastItem(snapshot.docs[snapshot.docs.length -1])
            setLoading(false);
          }

        })
      }
      fetchMatchs();


    return () => {
      isActive = false;
    }

    }, [])
  )


  async function handleRefreshMatchs(){
    setLoadingRefresh(true);

    firestore().collection('matchs')
    .where('userId', '==', user.uid)
    .orderBy('created', 'desc')
    .limit(5)
    .get()
    .then((snapshot) => {

      setMatchs([]);
      const matchsList = [];

      snapshot.docs.map( u => {
        matchsList.push({
          ...u.data(),
          id: u.id,
        })
      })

      setEmptyList(false)
      setMatchs(matchsList);
      setLastItem(snapshot.docs[snapshot.docs.length -1])
      setLoading(false);

    })

    setLoadingRefresh(false);

  }

  async function getListMatchs(){
    if(emptyList){
      setLoading(false);
      return null;
    }

    if(loading) return;

    firestore().collection('matchs')
    .where('userId', '==', user.uid)
    .orderBy('created', 'desc')
    .limit(5)
    .startAfter(lastItem)
    .get()
    .then( (snapshot) => {
      const matchsList = [];

      snapshot.docs.map ( u => {
        matchsList.push({
          ...u.data(),
          id: u.id,
        })
      })

      setEmptyList(!!snapshot.empty)
      setLastItem(snapshot.docs[snapshot.docs.length -1])
      setMatchs(oldMatchs => [...oldMatchs, ...matchsList]);
      setLoading(false);
    })

  }

  return(
    <Container>
      <Header/>
        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F1F1'}}>
            <Text style={{
                fontSize: 30,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Arial',
                fontWeight: 'bold',
            }}>
            Minhas Peladas
            </Text>
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
}

export default MyMatchs;