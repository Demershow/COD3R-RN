import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState, useContext } from 'react';
import UsersContext from '../contexts/UsersContexts';

export default function UserForm({ route, navigation }) {
  const [User, setUser] = useState(route.params ? route.params : {})
  const { dispatch } = useContext(UsersContext)
  return (
    <View style={style.form}>
      <Text>Name</Text>
      <TextInput style={style.input} onChangeText={name => setUser({ ...User, name })} placeholder='Informe o nome' value={User.name} />
      <Text>Email</Text>
      <TextInput style={style.input} onChangeText={email => setUser({ ...User, email })} placeholder='Informe o email' value={User.email} />
      <Text>informe o url do avatar</Text>
      <TextInput style={style.input} onChangeText={avatarUrl => setUser({ ...User, avatarUrl })} placeholder='Informe o avatarUrl' value={User.avatarUrl} />
      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: User.id ? 'updateUser' : 'createUser',
            payload: User,
          })
          navigation.goBack()
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({
  form: {
    padding: 12
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  }
})