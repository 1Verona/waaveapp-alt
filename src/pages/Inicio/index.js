import React from 'react'
import {
  View,
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity
 } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function Inicio() {
  return (
    <Animatable.View animation={'fadeInLeft'}>
      <Text>vai ter algumca coisa aq</Text>
    </Animatable.View>
  );
}
const styles = StyleSheet.create({


})