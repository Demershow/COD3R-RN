import React from 'react';
import Ascreen from '../views/Ascreen';
import Bscreen from '../views/Bscreen';
import Cscreen from '../views/Cscreen';
import NextStack from '../components/NextStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default props => (
  <Stack.Navigator
    initialRouteName="Ascreen"
    screenOptions={{headerShown: true}}>
    <Stack.Screen name="Ascreen" options={{title: 'Informações Iniciais'}}>
      {props => (
        <NextStack {...props} forward="Bscreen">
          <Ascreen />
        </NextStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="Bscreen">
      {props => (
        <NextStack
          {...props}
          back
          forward="Cscreen"
          forwardParams={{numero: 1007}}>
          <Bscreen />
        </NextStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="Cscreen">
      {props => (
        <NextStack {...props} back forward="Cscreen">
          <Cscreen {...props} />
        </NextStack>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
