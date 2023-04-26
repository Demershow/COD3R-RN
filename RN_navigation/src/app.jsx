import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import Ascreen from './views/Ascreen';
import Bscreen from './views/Bscreen';
import Cscreen from './views/Cscreen';

export default function app() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Ascreen />
      <Bscreen />
      <Cscreen />
    </SafeAreaView>
  );
}
