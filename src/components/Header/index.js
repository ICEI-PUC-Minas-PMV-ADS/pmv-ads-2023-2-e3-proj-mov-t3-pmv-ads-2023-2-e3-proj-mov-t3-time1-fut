import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { Container, Title, ButtonMenu} from './styles';

export default function Header({ title }){
  const navigation = useNavigation();

  return(
    <Container>
      <ButtonMenu onPress={ () => navigation.openDrawer() }>
        <Icon name="menu" size={35} color="#121212"/>
      </ButtonMenu>

      { title && (
        <Title>
          {title}
        </Title>
      )}
    </Container>
  )
}