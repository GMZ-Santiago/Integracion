// import { all } from 'axios'
import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions'

let initialState = {
    myFavorites: [],
    allCharacters: []
}

function rootReducer (state = initialState, action){
    switch(action.type, action.payload){
    case ADD_FAV:
        return{
            ...state,
            myFavorites: [...state.allCharactersFav, action.payload],
            allCharactersFav: [...state.allCharactersFav, action.payload]
        }

    case REMOVE_FAV:
        return{
            ...state,
            myFavorites: state.myFavorites.filter(character => 
                character.id !== Number(action.payload))
        }

    case FILTER:

    return{
        ...state,
        myFavorites: state.allCharacters.filter(
            (character) => character.gender !== action.payload
        )
    }
        
    case ORDER:
        let ordenados;
        if(action.payload === "Ascendente"){
            ordenados = state.myFavorites.sort((a, b) => a.id > b.id ? 1 : -1)
        }else{
            ordenados = state.myFavorites.sort((a, b) => b.id > a.id ? 1 : -1)
        }

        return {
            ...state,
            myFavorites: [...ordenados]
        }


        default:
            return{
                ...state
            }
    }
}

export default rootReducer;