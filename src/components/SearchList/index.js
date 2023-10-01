import React from  'react';
import {Container, Name} from './styles'

import { useNavigation } from '@react-navigation/native'

function SearchList({ data }){
  const navigation = useNavigation();


  return(
    <Container onPress={ () => navigation.navigate("PostsUser", { title: data.nome, userId: data.id })  }>
      <Name>{data.nome}</Name>
    </Container>
  )
}

export default SearchList;
