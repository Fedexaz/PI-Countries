import React, { useState } from 'react'

import NavBar2 from '../NavBar2'

import style from './css/activity.module.css'

export default function Activity() {
    const [input, setInput] = useState({
        name: ' ',
        dificultad: 0,
        duracion: 0,
        temporada: 'verano',
        pais: [],
        errors: {
            dificultad: '',
            duracion: '',
            temporada: '',
            pais: '',
        },
        disabled: true
    })

    function handleChange(e){
        const { name, value } = e.target;
        let errors = this.state.errors;
        
        switch (name) {
            case 'name': 
                errors.name = value.length < 5 ? 'Nombre debe tener 5 caracteres o más!' : '';
            break;
            case 'duracion': 
                errors.duracion = value < 1 && 1001 > value ? 'La duración debe ser mayor a 1 y menor a 1000' : '';
            break;
            case 'dificultad': 
                errors.dificultad = value < 0 && 101 > value ? 'La dificultad debe ser mayor o igual a 0 y menor a 100' : '';
            break;
            default:
            break;
        }
        setInput({
            ...input,
            [name]: value,
            errors
        })
        validarForm(input.errors)
        
    }

    function validarForm(errors) {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
        if(valid) {
            setInput({
                ...input,
                disabled: false
            })
        } else {
            setInput({
                ...input,
                disabled: true
            })
        }
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
            <label htmlFor="dificultad">Dificultad de la actividad:</label>
            <input type="number" min='0' name="dificultad" id="dificultad" placeholder='Ingresa una dificultad' value={input.dificultad} onChange={handleChange} />
            <label htmlFor="duracion">Duración de la actividad:</label>
            <input type="number" min='0' name="duracion" id="duracion" placeholder='Ingresa una duración' value={input.duracion} onChange={handleChange} />
            <label htmlFor='temporada'>Temporada de la actividad:</label>
            <select name="temporada" id="temporada" value={input.temporada} onChange={handleChange}>
                <option value="invierno">Invierno</option>
                <option value="otonio">Otoño</option>
                <option value="primavera">Primavera</option>
                <option value="verano">Verano</option>
            </select>
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
