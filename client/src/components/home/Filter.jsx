import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { filtrarPorActividad, filtrarPorContinente, loadCountries } from '../../redux/actions';

export default function Filter() {
  const [activities, setActivities] = useState([])

  const dispatch = useDispatch();

  useEffect(() =>{
    async function cargarActividades(){
      const response = await axios.get('http://localhost:3001/activity/')
      if(response)setActivities(response.data)
    }
    cargarActividades()
  }, [])


  return (
    <>
      <select name="filtPorContinente" id="filtPorContinente" onChange={(e) => e.target.value !== 'sel' ? dispatch(filtrarPorContinente(e.target.value)) : dispatch(loadCountries())}>
        <option value="sel">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select name="filtPorContinente" id="filtPorContinente" onChange={(e) =>  e.target.value !== 'sel' ? dispatch(filtrarPorActividad(e.target.value)) : null}>
      <option value="sel">Seleccionar actividad</option>
        {
          activities?.map(e => {
            return <option key={e} value={e}>{e}</option>
          })
        }
      </select>

      <button onClick={(e) => dispatch(loadCountries())}>Borrar filtros</button>
    </>
  )
}
