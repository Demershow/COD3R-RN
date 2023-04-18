import React from 'react'
import { Text } from 'react-native'
import style from './style'

export default props => (
    <>
        <Text style={style.bigTxt}>{props.primary}</Text>
        <Text>{props.secondary}</Text>
    </>
)