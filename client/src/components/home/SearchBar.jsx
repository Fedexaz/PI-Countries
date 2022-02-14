import React, { useState } from 'react'

import style from './css/searchbar.module.css'

export default function SearchBar() {

  const {input, setInput} = useState('')


  function handleSubmit(evento){
    evento.preventDefault();
  }

  return (
    <form className={style.formulario} onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='Ingresa un nombre de país' value={input}/>
        <button type='submit'>Buscar</button>
    </form>
  )
}
