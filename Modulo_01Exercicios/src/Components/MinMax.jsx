import { View, Text } from 'react-native'
import React from 'react'
import style from './style'

export default function minMax(props) {
  return (
    <View>
      <Text style={style.bigTxt}>O valor {props.max} é maior que o {props.min}</Text>
    </View>
  )
}