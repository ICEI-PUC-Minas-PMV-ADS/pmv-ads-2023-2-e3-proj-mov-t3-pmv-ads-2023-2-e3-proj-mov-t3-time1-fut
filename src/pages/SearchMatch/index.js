import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import Feather from 'react-native-vector-icons/Feather'
import { Container, AreaInput, Input, List } from './styles'

import SearchMatchList from '../../components/SearchMatchList';

function Search(){
  const [input, setInput] = useState('');
  const [matchs, setMatchs] = useState([]);

  useEffect(() => {
    if(input === '' || input === undefined){
      setMatchs([]);
      return;
    }

    const subscriber = firestore().collection('matchs')
    .where('TimeA', '>=', input)
    .where('TimeA', '<=', input + "\uf8ff")
    .onSnapshot( snapshot => {
      const listMatchs = [];

      snapshot.forEach(doc => {
        listMatchs.push({
          ...doc.data(),
          id: doc.id,
        })
      })

      setMatchs(listMatchs);


    })


    return () => subscriber();

  }, [input])

  return(
    <Container>
      <AreaInput>
        <Feather
          name="search"
          size={20}
          color="#E52246"
        />
        <Input
          placeholder="Digite o nome do seu time"
          value={input}
          onChangeText={ (text) =>  setInput(text) }
          placeholderTextColor="#353840"
        />
      </AreaInput>

      <List
      data={matchs}
      renderItem={ ({item}) => <SearchMatchList data={item} /> }
      />
    </Container>
  )
}

export default Search;