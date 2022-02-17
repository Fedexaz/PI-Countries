import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import style from './css/landing.module.css'
import '../spinner.css'
import { useDispatch, /* useSelector */ } from 'react-redux';
import { loadCountries } from '../../redux/actions';

export default function LandingPage() {    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCountries())
    }, [dispatch])

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