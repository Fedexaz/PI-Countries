import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function NavBar() {
  return (
    <>
        <Link to="/">Ir a Landing Page</Link>
        <SearchBar />
    </>
  )
}
