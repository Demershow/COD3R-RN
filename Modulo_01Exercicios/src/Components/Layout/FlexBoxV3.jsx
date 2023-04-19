import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado color='#ff801a' side={20} />
            <Quadrado color='#50d1f6' side={30} />
            <Quadrado color='#dd22c1' side={40} />
            <Quadrado color='#8312ed' side={50} />
            <Quadrado color='#36c9a7' side={60} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    }
})
