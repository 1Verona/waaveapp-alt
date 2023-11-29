import React, { useState } from 'react'
import {
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  Alert,
 } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { TextInput } from 'react-native-paper';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import database from "@react-native-firebase/database"

const criarPerfil = async (response: FirebaseAuthTypes.UserCredential) => {
  await database().ref(`/users/${response.user.uid}`).set({ email })
}

const Cadastro = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const navigation = useNavigation()
  const corla = '#34a094'

  const cadastroEmailESenha = async () => {
    if (email && senha) {
      try {
        const response = await auth().createUserWithEmailAndPassword(email, senha);
        if (response.user) {
          await criarPerfil(response);
          navigation.replace("Main")
        }
      } catch (e) {
        Alert.alert("Erro encontrado", "Verifique os dados")
      }
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.containerAnim} animation={'fadeInUp'}>
        <Text style={styles.titulo}>Bem Vindo!</Text>
        <TextInput
          style={styles.campos}
          mode={'outlined'}
          outlineColor='#34a094'
          activeOutlineColor={corla}
          label={'Email'}
          placeholder='Insira seu Email'
          left={<TextInput.Icon icon='email' color='#34a094' />}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.campos}
          mode={'outlined'}
          outlineColor='#34a094'
          activeOutlineColor={corla}
          label={'Nome'}
          placeholder='Insira seu Nome'
          left={<TextInput.Icon icon='account' color='#34a094' />}
        />

        <TextInput
          id='senha'
          style={styles.campos}
          mode={'outlined'}
          outlineColor='#34a094'
          activeOutlineColor={corla}
          label={'Senha'}
          placeholder='Insira sua senha'
          left={<TextInput.Icon icon='lock' color='#34a094' />}
        />

        <TextInput
          id='senha'
          style={styles.campos}
          mode={'outlined'}
          outlineColor='#34a094'
          activeOutlineColor={corla}
          label={'Repita sua senha'}
          placeholder='Confirme sua senha'
          left={<TextInput.Icon icon='lock' color='#34a094' />}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={cadastroEmailESenha}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Text style={styles.footerText}>WAAVE © 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 30,
  },
  containerAnim: {
    paddingHorizontal: 15,
  },
  campos: {
    color: '#34a094',
    marginVertical: 8,
    borderRadius: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#38A69D',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  footerText: {
    textAlign: "center",
    marginTop: 165,
    marginBottom: 5,
    color: 'gray'
  }
})

export default Cadastro;
