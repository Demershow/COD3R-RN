import React from 'react'
import CentralText from '../components/centralText'

export default props => {
  const r = props.route
  const number = r && r.params && r.params.numero
    ? props.route.params.numero : 0
  return (
    <CentralText bg='#9932cd'>
      Tela C - {number}
    </CentralText>
  )
}