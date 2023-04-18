import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import Primeiro from './Components/primeiro';
// import { Comp01, Comp02, Comp03 } from './Components/Multi';
// import MinMax from './Components/MinMax';
// import Random from './Components/Random';
// import Titulo from './Components/Titulo';
// import Botao from './Components/Botao';
// import Contador from './Components/Contador';
// import Pai from './Components/Indireta/Pai';
// import Contadorv2 from './Components/Contador/Contadorv2';
import PlataformaDiferente from './Components/PlataformaDiferente';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <PlataformaDiferente />
      {/* <Contadorv2 />*/}
      {/* <Pai /> */}
      {/* <Contador inicial={200} />  */}
      {/* <Botao /> */}
      {/* <Titulo primary='Titulo legal' secondary='subtitulo mais legal ainda' /> */}
      {/* <Random min={10} max={20} /> */}
      {/* <MinMax min={3} max={20}/> */}
      {/* <Comp01 />
      <Comp02 />
      <Comp03 /> */}
      {/* <Primeiro /> */}
    </SafeAreaView>
  );
};


const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  
})
