import React from 'react'
import CentralText from '../components/centralText'
import { View, Button } from 'react-native'

export default props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button
          title='Abrir'
          onPress={() => {
            props.navigation.openDrawer()
            setTimeout(() => {
              props.navigation.closeDrawer()
              setInterval(() => {
                props.navigation.toggleDrawer()
              }, 1000)
            }, 3000)
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <CentralText corFundo='#33fa72' corTexto='#000'>
          Tela D
        </CentralText>
      </View>
    </View>
  )
}
