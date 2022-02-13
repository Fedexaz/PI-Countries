import axios from 'axios';

export function addActividad(payload){
    return {
        type: "AGREGAR_ACTIVIDAD",
        payload
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
                    type: "LOAD_COUNTRIES",
                    payload: datos.data
                }
            })
            .catch(e => {
                console.log(e)
            })  
}

export function filtrarPorContinente(continente){
    return {
        type: "FILTRAR_CONTINENTE"
    }
}

export function filtrarPorActividad(temporada){
    return {
        type: "FILTRAR_ACTIVIDAD"
    }
}

export function filtrarPorOrdenAlfabetico(tipo){
    return {
        type: tipo === "asc" ? "FILTRAR_ALFABETICO_ASC" : "FILTRAR_ALFABETICO_DESC"
    }
}

export function filtrarPorCantidadPoblacion(tipo){
    return {
        type: tipo === "asc" ? "FILTRAR_POBLACION_ASC" : "FILTRAR_POBLACION_DESC"
    }
}


