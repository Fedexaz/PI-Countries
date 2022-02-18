import React from 'react'

import style from './css/country.module.css'

export default function Country(props) {
  return (
    <div className={style.card}>
      <img src={props.urlImg} alt={props.name}/>
      <h3>{props.name}</h3>
      <h4>{props.continent}</h4>
    </div>
  )
}
