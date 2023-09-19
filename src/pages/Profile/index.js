import React, { useContext } from 'react';
import {
  Container, 
  Message,
  Name,
  NewLink,
  NewText,
  LogoutButton,
  LogoutText
 } from './styles'

import Header from '../../components/Header';

import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native'

export default function Profile(){
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  return(
    <Container>
      <Header title="Meu perfil" />

      <Message>
        Hey, bem vindo de volta!
      </Message>

      <Name numberOfLines={1} >
        {user && user.name}
      </Name>

      <NewLink onPress={ () => navigation.navigate('Registrar') }>
        <NewText>Criar partida</NewText>
      </NewLink>

      <LogoutButton onPress={ () => signOut() }>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  )
}