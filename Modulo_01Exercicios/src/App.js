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
// import PlataformaDiferente from './Components/PlataformaDiferente';
// import ParImpar from './Components/ParImpar';
// import Familia from './Components/Relacao/Familia'
// import Membro from './Components/Relacao/Membro';
// import UsuarioLogado from './Components/UsuarioLogado';
// import ListaProdutos from './Components/Produtos/ListaProdutos';
// import ListaProdutosv2 from './Components/Produtos/ListaProdutosv2';
// import DigiteSeuNome from './Components/DigiteSeuNome';
// import Quadrado from './Components/Layout/Quadrado';
// import FlexBoxV1 from './Components/Layout/FlexBoxV1';
// import FlexBoxV2 from './Components/Layout/FlexBoxV2';
// import FlexBoxV3 from './Components/Layout/FlexBoxV3';
// import FlexBoxV4 from './Components/Layout/FlexBoxV4';
import Mega from './Components/Mega/Mega';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <Mega qtdeNumeros={12} />
      {/* <FlexBoxV4 /> */}
      {/* <FlexBoxV3 /> */}
      {/* <FlexBoxV2 /> */}
      {/* <FlexBoxV1 /> */}
      {/* <Quadrado />
      <Quadrado color='#ff0' /> */}
      {/* <DigiteSeuNome /> */}
      {/* <ListaProdutosv2 /> */}
      {/* <ListaProdutos /> */}
      {/* <UsuarioLogado usuario={{nome: "Demerson", email: 'demersontorres520@gmail.com'}} /> */}
      {/* <Familia  >
        <Membro nome='julia' sobrenome='teste' />
      </Familia> */}
      {/* <ParImpar num={5} /> */}
      {/* <PlataformaDiferente /> */}
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
