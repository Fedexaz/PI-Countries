import React, { useEffect } from 'react'

import Country from './Country'
import Paginator from './Paginator'

import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import style from './css/countries.module.css'

import { countryDetail } from '../../redux/actions'

export default function Countries() {
    const paises = useSelector(state => state.countries);
    
    const dispatch = useDispatch()

    return (
        <>
            <div>
                {paises.length > 0 ? (
                    <>
                    <Paginator
                        data={paises}
                        RenderComponent={Country}
                    />
                    </>
                ) : (
                <h1>No hay países a mostrar</h1>
                )}
            </div>
        </>
    )
}
