import { Text } from 'react-native'
import React from 'react'

import style from './style'

function Comp01() {
  return(

    <Text style={style.bigTxt}>
    comp01
  </Text>
    )
}
function Comp02() {
  return (<Text style={style.bigTxt}>
    comp02
  </Text>)
}
function Comp03() {
  return(

    <Text style={style.bigTxt}>
    comp03
  </Text>
    )
}


export {Comp01, Comp02, Comp03}
