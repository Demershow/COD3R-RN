import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <Post image={require('./assets/imgs/fence.png')} />
      </View>
    )
  }
}