import React from 'react'
//import { Link } from 'react-router-dom'
import NavBar2 from '../NavBar2'

import style from './css/countrydetail.module.css'

export default function CountryDetail() {
  return (
    <>
    <NavBar2 />
    <div className={style.container}>
        <img src="https://flagcdn.com/w320/ar.png" alt="argentina" />
        <h1>Argentina</h1>
        <p>Código: ARG</p>
        <p>Capital: Buenos Aires</p>
        <p>Superficie: 123123 km2</p>
        <p>Población: 1000 millones</p>
        <p>Actividades</p>
        <p>Surf, Sky</p>
    </div>
    </>
  )
}
