import React from 'react'
import Countries from './Countries'
import { Link } from 'react-router-dom'

import style from './css/home.module.css'
import FilterAndOrder from './FilterAndOrder'

export default function Home() {
  return (
    <>
      <Link to="/activity">Agregar actividad</Link>
      <div className={style.blur}>
        <FilterAndOrder />
      </div>
      <Countries />
    </>
  )
}
