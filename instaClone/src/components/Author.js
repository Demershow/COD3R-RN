import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gravatar } from 'react-native-gravatar'

export default props => {
  return( 
    <View style={styles.container}>
      <Gravatar options={{email: props.email, security: true}} style={styles.avatar} />
      <Text style={styles.nickname}>{props.nickname}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10
  }, 
  nickname: {
    color: "#444",
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
})