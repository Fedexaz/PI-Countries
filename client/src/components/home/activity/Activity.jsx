import React, { useState } from 'react'

import NavBar2 from '../NavBar2'

import style from './css/activity.module.css'

export default function Activity() {
    const [input, setInput] = useState({
        name: '',
        dificultad: 0,
        duracion: 0,
        temporada: 'verano',
        pais: [],
        disabled: true
    })

    const [error, setError] = useState({
        name: '',
        dificultad: '',
        duracion: '',
        temporada: '',
        pais: '',
    })

    function handleChange(e){
        const { name, value } = e.target;

        switch(name){
            case 'name':{
                setError({
                    ...error,
                    name: value.length < 3 ? 'El nombre es demasiado corto (3 o mas letras)' : '' 
                })
                break;
            }

            case 'dificultad':{
                setError({
                    ...error,
                    dificultad: value < 1 || value > 5 ? 'La dificultad varía entre 1 y 5' : '' 
                })
                break;
            }
            
            case 'duracion':{
                setError({
                    ...error,
                    duracion: value < 1 || value > 2000 ? 'La duración no puede ser mas de 2000 horas ni menor a 0 horas' : '' 
                })
                break;
            }
            
            case 'temporada':{
                setError({
                    ...error,
                    temporada: value === 'seleccionar' ? 'Elige una temporada' : '' 
                })
                break;
            }

            default:{
                break;
            }
        }
        
        setInput({
            ...input,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
      <>
        <NavBar2 />
        <form className={style.container} method="POST" onSubmit={handleSubmit}>
            <h1>Agregar actividad Turística</h1>

            <label htmlFor="name">Nombre de la actividad:</label>
            <input type="text" name="name" id="name" placeholder='Ingresa un nombre' value={input.name} onChange={handleChange} />
            {error.name.length ? <span>{error.name}</span> : null }

            <label htmlFor="dificultad">Dificultad de la actividad:</label>
            <input type="number" min='0' name="dificultad" id="dificultad" placeholder='Ingresa una dificultad' value={input.dificultad} onChange={handleChange} />
            {error.dificultad.length ? <span>{error.dificultad}</span> : null }

            <label htmlFor="duracion">Duración de la actividad:</label>
            <input type="number" min='0' max='2001' name="duracion" id="duracion" placeholder='Ingresa una duración' value={input.duracion} onChange={handleChange} />
            {error.duracion.length ? <span>{error.duracion}</span> : null }

            <label htmlFor='temporada'>Temporada de la actividad:</label>
            <select name="temporada" id="temporada" value={input.temporada} onChange={handleChange}>
                <option value="seleccionar" selected>Seleccionar...</option>
                <option value="invierno">Invierno</option>
                <option value="otonio">Otoño</option>
                <option value="primavera">Primavera</option>
                <option value="verano">Verano</option>
            </select>
            {error.temporada.length ? <span>{error.temporada}</span> : null }

            <label htmlFor="paisAct">¿En que país está la actividad?</label>
            <input type="text" name="bpais" placeholder='Escribe el nombre de algún país a agregar...'/>
            {true ?
                <div className={style.contenedorBuscador}>
                    <div id="paisesContainer">
                        <h4>Paises encontrados</h4>
                        <ul className={style.lista}>
                            <li>Argentina <button>Agregar</button></li>
                        </ul>
                    </div>
                </div>
            : null
            }
            <hr />
            {true ?
                <div className={style.contenedorPaises}>
                    <div id="paisesContainer">
                        <h4>Paises con la actividad</h4>
                        <ul className={style.lista}>
                            <li>Argentina <button>X</button></li>
                            <li>Argentina <button>X</button></li>
                            <li>Argentina <button>X</button></li>
                            <li>Argentina <button>X</button></li>
                            <li>Argentina <button>X</button></li>
                        </ul>
                    </div>
                </div>
            : null
            }
            <button type="submit">Agregar actividad</button>
        </form>
    </>
  )
}
