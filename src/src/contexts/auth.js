import React, { createContext, useState } from 'react';

import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState({
    nome: 'Matheus Teste'
  }); 

  const navigation = useNavigation();


  async function signUp(email, password, nome){
    try{
      const response = await api.post('/users', {
       name: nome,
       password: password,
       email: email,
      })

      navigation.goBack();


    }catch(err){
      console.log("ERRO AO CADASTRAR", err)
    }
  }

  return(
    <AuthContext.Provider value={{ user, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

