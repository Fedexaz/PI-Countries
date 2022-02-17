import React from 'react'

import { useDispatch } from 'react-redux'

import { filterAndOrder, loadingState, ordenAlfabetico, ordenCantidadPoblacion } from '../../redux/actions';

export default function Ordenar() {
  const dispatch = useDispatch();
  
  return (
    <>
      <button onClick={(e) => {
          dispatch(ordenAlfabetico('asc'))
          dispatch(loadingState(false))
          dispatch(filterAndOrder(true))
        } 
      }>Ordenar por Orden Alfabético ASC</button>

      <button onClick={(e) => {
          dispatch(ordenAlfabetico('desc'))
          dispatch(loadingState(false))
          dispatch(filterAndOrder(true))
        }
      }>Ordenar por Orden Alfabético DESC</button>
      
      <button onClick={(e) => {
          dispatch(ordenCantidadPoblacion('asc'))
          dispatch(loadingState(false))
          dispatch(filterAndOrder(true))
        }
      }>Ordenar por Población ASC</button>
      
      <button onClick={(e) => {
          dispatch(ordenCantidadPoblacion('desc'))
          dispatch(loadingState(false))
          dispatch(filterAndOrder(true))
        }
      }>Ordenar por Población DESC</button>
    
    </>
  )
}
