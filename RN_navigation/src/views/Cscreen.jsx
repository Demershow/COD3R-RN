import React from 'react'
import CenterText from '../components/centerText'

export default props => {
  const r = props.route
  const number = r && r.params && r.params.numero
    ? props.route.params.numero : 0
  return (
    <CenterText bg='#9932cd'>
      Tela C - {number}
    </CenterText>
  )
}