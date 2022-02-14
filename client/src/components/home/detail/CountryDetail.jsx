import React from 'react'
import { useSelector } from 'react-redux'
import NavBar2 from '../NavBar2'
import style from './css/countrydetail.module.css'

export default function CountryDetail() {
  const pais = useSelector(state => state.countryDetail)
  return (
    <>
    <NavBar2 />
    <div className={style.container}>
        <img src={pais.urlImg} alt="argentina" />
        <h1>{pais.name}</h1>
        <p>Código: {pais.ID}</p>
        <p>Capital: {pais.capital}</p>
        <p>Superficie: {pais.area / 1000} km2</p>
        <p>Población: {(pais.poblacion / 1000000).toFixed(2)} millones de personas</p>
        {pais.activities.length > 0 ? <p>Actividades</p> : null}
        <ul>{pais.activities?.map(a => {
          return <li key={a.ID}>{a.name}</li>
        })}</ul>
    </div>
    </>
  )
}
