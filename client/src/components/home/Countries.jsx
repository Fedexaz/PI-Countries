import React, { useEffect } from 'react'

import Country from './Country'

import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import style from './css/countries.module.css'

import { loadCountries } from '../../redux/actions'

export default function Countries() {
    
    const { countries } = useSelector(state => state.countries)
    const dispatch = useDispatch()

    useEffect(() => {
        if(countries.length === 0){
            dispatch(loadCountries())
        }
    }, [])
    

    return (
        <div className={style.cardcontainer}>
            {countries ? countries.map(c => {
                <Link to={`/country/${c.ID}`} >
                    <Country name={c.name} urlImg={c.urlImg} continent={c.continent} />
                </Link>
            }): <h2>No hay paises en la base de datos</h2>}
        </div>
    )
}
