import React from 'react'
import { Text } from 'react-native'
import style from '../style'

export default props => {
    return (
        <>
            <Text style={style.bigTxt}>{props.a}</Text>
            <Text style={style.bigTxt}>{props.b}</Text>
        </>
    )
}