import React from  'react';
import {Container, Name} from './styles'

import { useNavigation } from '@react-navigation/native'

function SearchMatchList({ data }){
  const navigation = useNavigation();


  return(
    <Container onPress={ () => navigation.navigate("Match", { matchId: data.id })  }>
      <Name>{data.TimeA} vs {data.TimeB}</Name>
    </Container>
  )
}

export default SearchMatchList;
