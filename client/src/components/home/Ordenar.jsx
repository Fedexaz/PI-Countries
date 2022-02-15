import React from 'react'
import { useDispatch } from 'react-redux'
import { ordenAlfabetico, ordenCantidadPoblacion } from '../../redux/actions';

export default function Ordenar() {
  const dispatch = useDispatch();
  
  return (
    <>
      <button onClick={(e) => dispatch(ordenAlfabetico('asc'))}>Ordenar por Orden Alfabético ASC</button>
      <button onClick={(e) => dispatch(ordenAlfabetico('desc'))}>Ordenar por Orden Alfabético DESC</button>
      <button onClick={(e) => dispatch(ordenCantidadPoblacion('asc'))}>Ordenar por Población ASC</button>
      <button onClick={(e) => dispatch(ordenCantidadPoblacion('desc'))}>Ordenar por Población DESC</button>
    </>
  )
}
