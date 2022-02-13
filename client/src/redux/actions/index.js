import axios from 'axios';

export function addActividad(name, dificultad, duracion, temporada, idPais){
    return function (dispatch){
        return axios.post('http://localhost:3001/activity/', {
            name,
            dificultad,
            duracion,
            temporada,
            idPais
        })
        .then(resp => {
            return {
                type: "AGREGAR_ACTIVIDAD",
                payload: {
                    name,
                    dificultad,
                    duracion,
                    temporada,
                    idPais
                }
            }
        })
        .catch(e => {
            console.log(e)
        })  
    }          
}

export function loadCountries(){
    return function (dispatch){
        return axios.get('http://localhost:3001/countries')
            .then(datos => {
                return {
                    type: "LOAD_COUNTRIES",
                    payload: datos.data
                }
            })
            .catch(e => {
                console.log(e)
            })  
    }          
}

export function searchCountry(country){
    return axios.get(`http://localhost:3001/countries/?name=${country}`)
            .then(datos => {
                return {
                    type: "SEARCH_COUNTRY",
                    payload: datos.data
                }
            })
            .catch(e => {
                console.log(e)
            })  
}

export function filtrarPorContinente(continente){
    return {
        type: "FILTRAR_CONTINENTE",
        payload: continente
    }
}

export function filtrarPorActividad(actividad){
    return {
        type: "FILTRAR_ACTIVIDAD",
        payload: actividad
    }
}

export function ordenAlfabetico(tipo){
    return {
        type: tipo === "asc" ? "ORDEN_ALFABETICO_ASC" : "ORDEN_ALFABETICO_DESC"
    }
}

export function ordenCantidadPoblacion(tipo){
    return {
        type: tipo === "asc" ? "ORDEN_POBLACION_ASC" : "ORDEN_POBLACION_DESC"
    }
}

