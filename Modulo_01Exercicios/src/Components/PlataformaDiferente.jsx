import React from 'react'
import { Text, Platform } from 'react-native'
import style from './style'

export default _ => {
    if(Platform.OS === 'android') {
        return <Text style={style.bigTxt}>Android</Text>
    } else if(Platform.OS === 'ios') {
        return <Text style={style.bigTxt}>iOS</Text>
    } else {
        return <Text style={style.bigTxt}>{Platform.OS}</Text>
    }
}