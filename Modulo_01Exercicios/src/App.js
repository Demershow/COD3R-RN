import React from 'react';
import {SafeAreaView} from 'react-native';

// import Primeiro from './Components/primeiro';
import { Comp01, Comp02, Comp03 } from './Components/Multi';

export default () => {
  return (
    <SafeAreaView>
      <Comp01 />
      <Comp02 />
      <Comp03 />
      {/* <Primeiro /> */}
    </SafeAreaView>
  );
};
