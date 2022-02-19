import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function NavBar() {
  return (
    <>
        <Link to="/home">Ir a home</Link>
        <Link to="/">Ir a Inicio</Link>
        <SearchBar />
    </>
  )
}
