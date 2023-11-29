import React from 'react'
import {
    View,
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity
   } from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper'
import SignIn from '../signin'
import Logo from '../../assets/logo.png'
import Bg from '../../assets/Bg.jpg'

export default function Welcome(){
  const navigation = useNavigation()
  const corla = '#34a094'
  return(
    <View style={styles.container }>
      <View style={styles.containerLogo}>
        <Animatable.Image 
          animation='flipInY'
          source={Logo}
          style= {{ width: '100%' }}
          resizeMode='contain'
        />
      </View>

      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>Bem vindo ao <Text style={{color:(corla)}}>WAAVE</Text></Text>
        <Text style={styles.text}>Venha conhecer mais!</Text>
        <IconButton onPress={() => navigation.navigate(SignIn)}style={styles.flecha}icon='arrow-right' iconColor={corla}></IconButton>
        <Text style={{
          textAlign: "center",
          marginTop:90 ,
          marginBottom: 5,
          color: 'gray'
        }}>WAAVE © 2023</Text>
      </Animatable.View>
      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006b5f'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#006b5f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',

    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    textAlign:'center',
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1',
    textAlign: 'center',
    fontSize: 18
  },
  flecha:{
    position: 'absolute',
    right: 0,
    top: 160
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
})