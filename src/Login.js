//MANCILLA GUTIÉRREZ EDGAR JESÚS
import React,{Component} from 'react';
import {View, StyleSheet, Alert, TextInput,ActivityIndicator,Keyboard} from 'react-native';
import { Container,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon,Button} from "native-base";
import api from '../Data/api';

class Login extends Component{
   constructor(props){
        super(props);
        this.state = {
          user:'',
          pass:'' };
    }

  login = async() => {
        let validarLog = await api.validarLog(this.state.user, this.state.pass)

        if(validarLog.status == 1){
            this.props.navigation.navigate('Movies');
        }
        else{
            Alert.alert('Usuario o clave invalidos');
        }
    }


    state={
        showIndicator:false,
    }
    onButtonPress=()=>{
        this.setState({
            showIndicator:true
        }),
    this.props.navigation.navigate('Bienvenida',{contrasena:this.state.contrasena, usuario:this.state.usuario});
    }

    state = {switchValue:false}
    toggleSwitch = (value) => {
      this.setState({switchValue: value})
   }

    render(){
  const navigation = this.props.navigation;
  return (
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Iniciar  sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Usuario'
                             value={this.state.user}
                             onChangeText={(user)=>this.setState({user})}/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'
                  type='text'
                   value={this.state.pass}
                   onChangeText={(pass)=>this.setState({pass})}/>
                </Item>
                <Item inlineLabel last>
                    <Button success style = {misEstilos.boton2} 
                   onPress={() => {this.login() }}>
                    <Text>Ingresar</Text>
                    </Button>
                </Item>
                
              </Body>
            </CardItem>
            <CardItem>
            <Button success style = {misEstilos.boton} 
                    onPress ={() =>
                        navigation.navigate('Registro')}>
                    <Text>Registrarse</Text>
                    </Button>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
   );
  }
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
  },
  body: {
    paddingVertical: 40,
  },
    boton1: {
    marginLeft: '15%',
  },
     boton: {
    marginRight: '15%',
  },
       boton2: {
    marginLeft: '27%',
    backgroundColor: 'orange'
  }
});

export default Login;