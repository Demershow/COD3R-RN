import { View, FlatList, Text, Alert } from 'react-native'
import React, {useContext} from 'react'
import { ListItem, Button, Icon } from 'react-native-elements'
import UsersContexts from '../contexts/UsersContexts'
export default function UserList({navigation}) {
const {state, dispatch} = useContext(UsersContexts)

function ConfirmAction(user) {
    Alert.alert('Excluir usuario', 'deseja excluir o user?', [
      {
        text: 'sim',
        onPress(){
          dispatch({
            type: 'deleteUser',
            payload: user,
          })
        }
      }, {
        text: 'não'
      }
    ])
  }

  function getUserItem({ item: user }) {
    return (
        <ListItem
            leftAvatar={{source: {uri: user.avatarUrl}}}
            key={user.id}
            title={user.name}
            subtitle={user.email}
            bottomDivider
            rightElement={getActions(user)}
            onPress={() => navigation.navigate('UserForm', user)}
        />
    )
}

function getActions(user){
return(
  <>
    <Button onPress={() => navigation.navigate('UserForm', user)}  type='clear' icon={<Icon name='edit' size={25} color="orange"/>}/>
    <Button onPress={() => ConfirmAction(user) }  type='clear' icon={<Icon name='delete' size={25} color="red"/>}/>
  </>
)
}

  return (
    <View>
      <FlatList data={state.users} keyExtractor={user => user.id} renderItem={getUserItem} />
    </View>
  )
}