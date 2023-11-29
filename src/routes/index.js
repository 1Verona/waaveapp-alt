import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import SignIn from '../pages/signin'
import Cadastro from '../pages/Cadastro'
import Inicio from '../pages/Inicio'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component= { Welcome }
        options= { {headerShown: false} }
         />
      <Stack.Screen 
        name="SignIn" 
        component= { SignIn } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Cadastro" 
        component= { Cadastro } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Inicio" 
        component= { Inicio } 
        options= { {headerShown: false} }
        />
    </Stack.Navigator>
  )
}