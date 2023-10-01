import React from 'react';
import { Text } from 'react-native';
import { Container, Title } from './styles'

function Header(){
  return(
    <Container>
      <Title>
        App
        <Text style={{fontStyle: 'italic', color: '#0000FF'}}>Fut</Text>
      </Title>
    </Container>
  )
}

export default Header;

