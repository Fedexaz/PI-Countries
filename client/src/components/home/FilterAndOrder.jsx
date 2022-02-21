import React from 'react'

import Filter from './Filter'
import Ordenar from './Ordenar'

import style from './css/filterandorder.module.css'

export default function FilterAndOrder() {
  return (
    <div className={style.contenedor}>
        <Ordenar />
        <Filter />
    </div>
  )
}
