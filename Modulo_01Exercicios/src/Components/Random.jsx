import { View, Text } from 'react-native'
import React from 'react'
import style from './style'

export default function Random({min, max}) {

  let escolhido = Math.random() * (max - min) + min;

  return (
    <View>
      <Text style={style.bigTxt}>{escolhido.toFixed()}</Text>
    </View>
  )
}