import React from 'react'
import Countries from './Countries'

import style from './css/home.module.css'
import FilterAndOrder from './FilterAndOrder'

export default function Home() {
  return (
    <>
      <div className={style.navContainer}>
        <FilterAndOrder />
      </div>
      <Countries />
    </>
  )
}
