import {View, Text} from 'react-native';
import React from 'react';

export default props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: props.bg || '#000'}}>
      <Text style={{fontSize: 50, color: props.text || '#fff'}}>{props.children}</Text>
    </View>
  );
}