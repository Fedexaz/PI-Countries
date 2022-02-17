const initialState = {
    countries: [],
    activities: [],
    countryDetail: {},
    loading: false,
    applyFilterAndOrder: false
}

export default function reducer(state = initialState, action){

    switch(action.type){
        case "APPLY_FILTER_AND_ORDER":{
            return {
                ...state,
                applyFilterAndOrder: action.payload
            }
        }

        case "SET_LOADING":{
            return {
                ...state,
                loading: action.payload
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
                loading: true,
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
                loading: true,
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
                loading: true,
                countries: state.countries.sort((a, b) => {
                    if (Number(a.poblacion) < Number(b.poblacion)) {
                        return -1;
                    }
                    if (Number(b.poblacion) < Number(a.poblacion)) {
                        return 1;
                    }
                    return 0;
                })
            }
        }
        
        case "ORDEN_POBLACION_DESC":{
            return {
                ...state,
                loading: true,
                countries: state.countries.sort((a, b) => {
                    if (Number(a.poblacion) > Number(b.poblacion)) {
                        return -1;
                    }
                    if (Number(b.poblacion) > Number(a.poblacion)) {
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