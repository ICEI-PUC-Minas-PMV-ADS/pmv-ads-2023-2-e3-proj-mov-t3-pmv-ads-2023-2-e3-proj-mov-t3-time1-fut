import React, { useState } from 'react';
import { 
  Container, 
  ContentView, 
  Content,
  Actions,
  TimePost
} from './styles'

import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { useNavigation } from '@react-navigation/native'

import firestore from '@react-native-firebase/firestore';
import { Text, Button } from 'react-native';
import moment from 'moment';

function MatchsList({ data, userId }){
  const navigation = useNavigation();
  const formattedDate = moment(data.matchDate, 'DDMMYYYY').format('DD/MM/YYYY');
  const formattedTime = moment(data.matchTime, 'HHmm').format('HH:mm');

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
        <Content>{data?.TimeA} vs {data?.TimeB}</Content>
        <Text>Data: {formattedDate}</Text>
        <Text>Hora: {formattedTime}</Text>
        <Text>Local: {data.matchLocation}</Text>
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