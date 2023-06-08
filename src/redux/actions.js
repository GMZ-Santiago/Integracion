export const ADD_FAV = "ADD_FAVORITE";
export const REMOVE_FAV = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
 
export function addFavorite (character) {
    return {
        type: ADD_FAV, 
        payload: character
    };
}

export function removeFavorite (id) {
    return {
        type: REMOVE_FAV, 
        payload: id
    };
}

export function filterCards (gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards (order) {
    return {
        type: ORDER,
        payload: order
    }
}