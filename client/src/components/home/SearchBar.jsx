import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchCountry } from '../../redux/actions';

import style from './css/searchbar.module.css'

export default function SearchBar() {

  const [ inputPais, setInputPais ] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(evento){
    evento.preventDefault();
    dispatch(searchCountry(inputPais))
  }

  function handleChange (e) {
		setInputPais(e.target.value)
	}

  return (
    <form className={style.formulario} onSubmit={(e) => handleSubmit(e)}>
        <button type='submit'>Buscar</button>
        <input type="text" name='inputPais' placeholder='Ingresa un nombre de país' value={inputPais} onChange={e => handleChange(e)}/>
    </form>
  )
}
