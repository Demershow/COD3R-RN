import React from 'react'
import { View, Button } from 'react-native'

export default props => (
  <View style={{ flex: 1 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      {props.back
        ? <Button
          title='Voltar'
          onPress={() => {
            props.navigation.goBack()
          }}
        />
        : false
      }
      {props.forward
        ? <Button
          title='Avançar'
          onPress={() => {
            props.navigation.navigate(
              props.forward,
              props.forwardParams
            )
          }}
        />
        : false
      }
    </View>
    <View style={{ flex: 1 }}>
      {props.children}
    </View>
  </View>
)