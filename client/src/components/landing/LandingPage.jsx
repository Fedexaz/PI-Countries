import React from 'react'
import { Link } from 'react-router-dom'

import './css/landing.css'

export default function LandingPage() {
  return (
    <div className='container'>
      <h1 className='title'>PI Países</h1>
      <br />
      <Link to='/home'>Explorar!</Link>
      <br />
      <a href="http://www.freepik.com" target="_blank" rel="noreferrer">Image designed by pikisuperstar / Freepik</a>
    </div>
  )
}