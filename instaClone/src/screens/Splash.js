import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import img from '../../assets/imgs/icon.png';

export default class Splash extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={img} style={styles.image} />
        <Text style={styles.header}>Lambe-Lambe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
