import React, { useState } from 'react';
import { 
  Container, 
  Name, 
  Header, 
  Avatar, 
  ContentView, 
  Content,
  Actions,
  LikeButton,
  Like,
  TimePost
} from './styles'

import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { useNavigation } from '@react-navigation/native'

import firestore from '@react-native-firebase/firestore';
import { Text } from 'react-native';

function MatchsList({ data, userId }){
  const navigation = useNavigation();

  function formatTimeMatchs(){
    const datePost = new Date(data.created.seconds * 1000);

    return formatDistance(
      new Date(),
      datePost,
      {
        locale: ptBR
      }
    )
  }

  return(
    <Container>

      <ContentView>
        <Content>{data?.TimeA}</Content>
        <Text>X</Text>
        <Content>{data?.TimeB}</Content>
      </ContentView>

      <Actions>
        <TimePost>
          {formatTimeMatchs()}
        </TimePost>
      </Actions>


    </Container>
  )
}

export default MatchsList;