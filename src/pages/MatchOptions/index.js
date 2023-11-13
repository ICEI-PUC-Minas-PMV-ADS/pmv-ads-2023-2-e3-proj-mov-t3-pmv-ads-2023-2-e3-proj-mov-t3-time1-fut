import React, { useLayoutEffect,  } from 'react';
import Header from '../../components/Header'
import { Container, ButtonText , Button } from './styles';
import { useNavigation } from '@react-navigation/native'

function MatchOptions(){
    
    const navigation = useNavigation();
    const title = "";

    useLayoutEffect(() => {
    navigation.setOptions({
      title: title === '' ? '' : title
    })
    }, [navigation, title])


   return(
    <Container>
        <Header/>

        <Button bg="#428cfd" onPress={ () => navigation.navigate("CreateMatch")}>
        <ButtonText color="#FFF">Criar Pelada</ButtonText>
        </Button>

        <Button bg="#428cfd" onPress={ () => navigation.navigate("SearchMatch")}>
        <ButtonText color="#FFF">Buscar Pelada</ButtonText>
        </Button>

        

    </Container>
   )
}


export default MatchOptions;