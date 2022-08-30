export const FAVOURITE_INITIAL_STATE = {
    type: '',
    oil: '',
    blend: '',
    recipe: '',
    remedy: '',
    body_system: '',
    ailment: '',
    category: '',
    supplement: '',
}

export const FAVOURITE_ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    LOAD_DATA: "LOAD_DATA",
}

export const favouriteTypeReducer = (state = FAVOURITE_INITIAL_STATE, action) => {
    switch(action.type){
        case FAVOURITE_ACTION_TYPE.CHANGE_INPUT: 
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

        default:
            return state;
    }
}