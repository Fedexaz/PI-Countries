const initialState = {
    countries: [],
    activities: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        
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
            }
        }
        
        case "ORDEN_ALFABETICO_DESC":{

        }
        
        case "ORDEN_POBLACION_ASC":{

        }
        
        case "ORDEN_POBLACION_DESC":{

        }
        
        default:{
            return state;
        }
    }
}