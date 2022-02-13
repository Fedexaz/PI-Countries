import React from 'react'
import { Link } from 'react-router-dom'

import style from './css/landing.module.css'
import '../spinner.css'

export default function LandingPage() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Countries PI</h1>
      {/* SPINNER DE CARGA */}
      <div className="lds-spinner centrar"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <br />
      <Link className={style.boton} to='/home'>Explorar!</Link>
      <br />
      <a className={style.copyright} href="https://www.wendyperrin.com/" target="_blank" rel="noreferrer">Imagen extraída de wendyperrin</a>
    </div>
  )
}