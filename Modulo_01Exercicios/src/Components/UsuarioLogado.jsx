import React from 'react'
import { Text } from 'react-native'
import style from './style'
import If from './if'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={style.bigTxt}>Usuário Logado:</Text>
                <Text style={style.bigTxt}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}