import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import style from '../style'

export default props => {
    return (
        <View style={styles.Display}>
            <Text style={[style.bigTxt, styles.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: '#FFF'
    }
})