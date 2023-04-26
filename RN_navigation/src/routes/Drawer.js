import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ascreen from '../views/Ascreen'
import Bscreen from '../views/Bscreen'
import Cscreen from '../views/Cscreen'
import Dscreen from '../views/Dscreen'

const Drawer = createDrawerNavigator()

export default props => (
  <Drawer.Navigator initialRouteName="Dscreen">
    <Drawer.Screen name="Ascreen" component={Ascreen} />
    <Drawer.Screen name="Bscreen" component={Bscreen} />
    <Drawer.Screen name="Cscreen" component={Cscreen} />
    <Drawer.Screen name="Dscreen" component={Dscreen} />
  </Drawer.Navigator>
)