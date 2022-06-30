export const ADD_PROPERTY = 'ADD_PROPERTY';
export const DELETE_PROPERTY = 'DELETE_PROPERTY';
export const EDIT_PROPERTY = 'EDIT_PROPERTY';

export const addProperty = (deal, latitude, longitude) => {
    return {
        type: ADD_PROPERTY,
        deal,
        latitude,
        longitude,
    }
}

export const deleteProperty = (id) => {
    return {
        type: DELETE_PROPERTY,
        id,
    }
}

export const editProperty = (id, plan) => {
    return {
        type: EDIT_PROPERTY,
        id,
        plan,
    }
}