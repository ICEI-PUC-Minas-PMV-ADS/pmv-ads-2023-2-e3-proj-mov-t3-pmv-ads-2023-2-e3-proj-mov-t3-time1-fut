import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import NewPost from '../pages/NewPost';
import CreateMatch from '../pages/NovaPelada';
import PostsUser from '../pages/PostsUser';
import MyMatchs from '../pages/MyMatchs';
import StopWatch from '../pages/StopWatch';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{ headerShown: false }}
      />

      <Stack.Screen 
      name="NewPost" 
      component={NewPost} 
      options={{
        title: 'Novo Post',
        headerTintColor: '#FFF',
        headerStyle:{
          backgroundColor: '#36393F'
        }
      }}
      />

      <Stack.Screen 
        name="PostsUser"
        component={PostsUser}
        options={{
          headerTintColor: '#FFF',
          headerStyle:{
          backgroundColor: '#36393F'
          }
        }}
      />

      <Stack.Screen 
        name="CreateMatch" 
        component={CreateMatch}
        options={{ 
          title: 'Nova Pelada',
          headerTintColor: '#FFF',
          headerStyle:{
          backgroundColor: '#36393F'
          }
        }}
      />

      <Stack.Screen 
        name="StopWatch" 
        component={StopWatch}
        options={{ 
          title: 'Cronometro',
          headerTintColor: '#FFF',
          headerStyle:{
          backgroundColor: '#36393F'
          }
        }}
      />

    </Stack.Navigator>
  )
}


function AppRoutes(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFF',

        tabBarStyle:{
          backgroundColor: '#202225',
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen 
      name="HomeTab" 
      component={StackRoutes} 
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="home" color={color} size={size} />
        }
      }}
      />

      <Tab.Screen 
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="search" color={color} size={size} />
        }
      }}
      />

      <Tab.Screen 
      name="MyMatchs"
      component={MyMatchs}
      options={{
      tabBarIcon: ({ color, size }) => {
        return <Feather name="clipboard" color={color} size={size} />
      }
      }}
      />

      <Tab.Screen 
      name="Profile" 
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="user" color={color} size={size} />
        }
      }}
      />

    </Tab.Navigator>
  )
}

export default AppRoutes;