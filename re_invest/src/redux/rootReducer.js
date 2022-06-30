import { ADD_PROPERTY, DELETE_PROPERTY, EDIT_PROPERTY } from './actions';

//create the default state
const defaultState = {
    properties: [],
}


let currentId = 1;

export function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_PROPERTY:
            return {
                ...state, 
                properties: [
                    ...state.properties, 
                    {
                        id: currentId++,
                        deal: action.deal,
                        latitude: action.latitude,
                        longitude: action.longitude
                    },
                ] 
            }
            

        case DELETE_PROPERTY:
            return {
                ...state,
                properties: state.properties.filter((property) => {
                    return property.id !== action.id
                })
            }

        case EDIT_PROPERTY:
            return {
                ...state,
                properties: state.properties.map((property) => {

                    if(property.id === 3) {
                         return {
                            ...property,
                            plan: action.plan
                         }
                    }
                    return property 
                })
            }
        default:
            return state;
    }
}


