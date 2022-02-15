const initialState = {
    countriesPages: [],
    countries: [],
    activities: [],
    countryDetail: {}
}

function mapCountriesPages(paises){
    let arreglo = []
    let primerosNueve = paises.slice(0, 9)
    let paisesQueSiguen = paises.splice(0, 10)
    let paginasTotales = Math.ceil(paisesQueSiguen.length / 10)
    for(let i = 0; i < paginasTotales.length; i++){
        i===0 ? arreglo.push(primerosNueve) : arreglo.push(paisesQueSiguen.slice(i*10, 10 * (i+1)))
    }
    return arreglo
}

export default function reducer(state = initialState, action){

    switch(action.type){
        case "PAGINAR_COUNTRIES":{
            return {
                ...state,
                countriesPages: mapCountriesPages(action.payload)
            }
        }

        case "AGREGAR_ACTIVIDAD":{
            return {
                ...state,
                activities: state.activities.push(action.payload),
            }
        }

        case "LOAD_COUNTRIES":{
            return {
                ...state,
                countries: action.payload
            }
        }
        
        case "SEARCH_COUNTRY":{
            return {
                ...state,
                countries: action.payload
            }
        }
        
        case "FILTRAR_CONTINENTE":{
            return {
                ...state,
                countries: state.countries.filter(e => e.continent === action.payload)
            }
        }
        
        case "FILTRAR_ACTIVIDAD":{
            return {
                ...state,
                countries: state.countries.filter(e => e.activities.name === action.payload)
            }
        }
        
        case "ORDEN_ALFABETICO_ASC":{
            return {
                ...state,
                countries: state.countries.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (b.name < a.name) {
                        return 1;
                    }
                    return 0;
                })
            }
        }
        
        case "ORDEN_ALFABETICO_DESC":{
            return {
                ...state,
                countries: state.countries.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            }
        }
        
        case "ORDEN_POBLACION_ASC":{
            return {
                ...state,
                countries: state.countries.sort((a, b) => {
                    if (a.poblacion < b.poblacion) {
                        return -1;
                    }
                    if (b.poblacion < a.poblacion) {
                        return 1;
                    }
                    return 0;
                })
            }
        }
        
        case "ORDEN_POBLACION_DESC":{
            return {
                ...state,
                countries: state.countries.sort((a, b) => {
                    if (a.poblacion > b.poblacion) {
                        return -1;
                    }
                    if (b.poblacion > a.poblacion) {
                        return 1;
                    }
                    return 0;
                })
            }
        }

        case "COUNTRY_DETAIL":{
            return {
                ...state,
                countryDetail: action.payload
            }
        }
        
        default:{
            return state;
        }
    }
}