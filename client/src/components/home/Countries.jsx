import React, { useEffect } from 'react'

import Country from './Country'
import Paginator from './Paginator'

import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import style from './css/countries.module.css'

import { countryDetail, loadCountries } from '../../redux/actions'

export default function Countries() {
    
    const page = useSelector(state => state.page)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCountries())
    }, [])

    return (
        <>
            <Paginator />
            <div className={style.cardcontainer}>
                {page ? page.map(c => {
                    return(<Link key={c.ID} to={`/country/${c.ID}`} onClick={() => dispatch(countryDetail({
                        ID: c.ID, 
                        name: c.name, 
                        urlImg: c.urlImg, 
                        continent: c.continent, 
                        capital: c.capital,
                        area: c.area,
                        poblacion: c.poblacion,
                        activities: c.activities
                    }))}>
                        <Country name={c.name} urlImg={c.urlImg} continent={c.continent} />
                    </Link>)
                }): <h2>No hay paises en la base de datos</h2>}
            </div>
            <Paginator />
        </>
    )
}
