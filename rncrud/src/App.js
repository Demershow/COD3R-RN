import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UserList from "./Views/UserList"
import UserForm from "./Views/UserForm"
import { UserContextProvider } from "./contexts/UsersContexts"
import { Button, Icon } from "react-native-elements"



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <UserContextProvider>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
          <Stack.Screen name="UserList" component={UserList} options={({ navigation }) => {
            return {
              title: 'Lista de usuarios', headerRight: () => (
                <Button onPress={() => navigation.navigate("UserForm")} type="clear" icon={<Icon name="add" size={25} color="white" />} />
              )
            }
          }} />
          <Stack.Screen name="UserForm" component={UserForm} options={{ title: 'Formulario de usuarios' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  )

}


const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}
