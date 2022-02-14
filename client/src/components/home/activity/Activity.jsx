import React from 'react'
import NavBar2 from '../NavBar2'

import style from './css/activity.module.css'

export default function Activity() {
  return (
      <>
        <NavBar2 />
        <form className={style.container} method="POST" onSubmit={(e) => e.preventDefault()}>
            <h1>Agregar actividad Turística</h1>
            <label htmlFor="name">Nombre de la actividad:</label>
            <input type="text" name="name" id="name" placeholder='Ingresa un nombre' />
            <label htmlFor="dificultad">Dificultad de la actividad:</label>
            <input type="number" min='0' name="dificultad" id="dificultad" placeholder='Ingresa una dificultad' />
            <label htmlFor="duracion">Duración de la actividad:</label>
            <input type="number" min='0' name="duracion" id="duracion" placeholder='Ingresa una duración' />
            <label htmlFor='temporada'>Temporada de la actividad:</label>
            <select name="temporada" id="temporada">
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
