import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import Feather from 'react-native-vector-icons/Feather'
import { Container, AreaInput, Input, List } from './styles'

import SearchList from '../../components/SearchList';

function Search(){
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if(input === '' || input === undefined){
      setUsers([]);
      return;
    }

    const subscriber = firestore().collection('users')
    .where('nome', '>=', input)
    .where('nome', '<=', input + "\uf8ff")
    .onSnapshot( snapshot => {
      const listUsers = [];

      snapshot.forEach(doc => {
        listUsers.push({
          ...doc.data(),
          id: doc.id,
        })
      })

      // console.log("LISTA DE USERS")
      // console.log(listUsers);
      setUsers(listUsers);


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
          placeholder="Procurando alguem?"
          value={input}
          onChangeText={ (text) =>  setInput(text) }
          placeholderTextColor="#353840"
        />
      </AreaInput>

      <List
      data={users}
      renderItem={ ({item}) => <SearchList data={item} /> }
      />
    </Container>
  )
}

export default Search;