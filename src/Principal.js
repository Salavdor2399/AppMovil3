import React,{Component,useState,useEffect} from 'react';
import {View, StyleSheet, Alert,Button, TextInput} from 'react-native';
import { Container,Text, Header,ActivityIndicator, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Indicator from './Indicator';

function Principal({route,navigation}){
 
  const [isVisible, setIsVisible] = useState(true);
    const toggleVisible = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        setTimeout(() => {
            toggleVisible();
        }, 1000);
    }, []);
  React.useEffect(() => {
    if (route.params?.pass && route.params?.user){
    }
  }, [route.params?.pass],[route.params?.user]);
  
  return (
    <View style={misEstilos.container}>
      <Indicator isVisible={isVisible}/>
      <Text >Hola: {route.params?.pass}</Text>
      <Text >Contraseña: {route.params?.user}</Text>
            <Button
              onPress={() => navigation.navigate('Login')}
              style={misEstilos.boton}
              title="Regresar"
            />
    </View>
  );
 
}

const misEstilos = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F52038',
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '27%',
  }

});
 
export default Principal;

//JOSE SALVADOR MEDINA OLGUIN