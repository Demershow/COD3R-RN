import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Ascreen from '../views/Ascreen'
import Bscreen from '../views/Bscreen'
import Cscreen from '../views/Cscreen'

const Tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName

        switch (route.name) {
          case 'Ascreen':
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline'
            break
          case 'Bscreen':
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline'
            break
          case 'Cscreen':
            iconName = focused ? 'ios-list-box' : 'ios-list'
            break
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
      showLabel: true,
    }} initialRouteName="Bscreen">
    <Tab.Screen name="Ascreen" component={Ascreen}
      options={{ title: 'initial' }} />
    <Tab.Screen name="Bscreen" component={Bscreen}
      options={{ title: 'mid' }} />
    <Tab.Screen name="Cscreen" component={Cscreen}
      options={{ title: 'end' }} />
  </Tab.Navigator>
)