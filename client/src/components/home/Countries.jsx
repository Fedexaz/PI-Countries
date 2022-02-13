import React from 'react'
import Country from './Country'
import { Link } from 'react-router-dom'

export default function Countries() {
  return (
    <div>
        <Link to={`/country/${1}`} >
            <Country name={'argentina'} urlImg={"https://flagcdn.com/w320/ar.png"} continent={'America'} />
        </Link>
        <Link to={`/country/${1}`} >
            <Country name={'argentina'} urlImg={"https://flagcdn.com/w320/ar.png"} continent={'America'} />
        </Link>
        <Link to={`/country/${1}`} >
            <Country name={'argentina'} urlImg={"https://flagcdn.com/w320/ar.png"} continent={'America'} />
        </Link>
    </div>
  )
}
