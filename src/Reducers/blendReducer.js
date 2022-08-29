export const INITIAL_STATE = {
    make_featured: true,
    name: '',
    fact: '',
    emotion_1: '',
    emotion_2: '',
    emotion_3: '',
    safety_information: '',
    ingredients: [],
    photo: ''
}

export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    ADD_INGRIDIANT: "ADD_INGRIDIANT",
    DELETE_INGRIDIANT: "DELETE_INGRIDIANT",
    CHANGE_SWITCH: "CHANGE_SWITCH",
    LOAD_DATA: "LOAD_DATA",
    FILE_CHANGE: "FILE_CHANGE"
}


export const blendReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.CHANGE_INPUT: 
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

        case ACTION_TYPE.CHANGE_SWITCH:
            return {
                ...state,
                [action.payload.name]:action.payload.checked
            }

        case ACTION_TYPE.ADD_INGRIDIANT: 
            let newingredientsArray = [];
            let ingredientsExist = state.ingredients.indexOf(action.payload.value)
            if(ingredientsExist === -1){
                newingredientsArray = [...state.ingredients, action.payload.value]
            }
            else {
                newingredientsArray = state.ingredients
            }
            return {
                ...state,
                ingredients: newingredientsArray
            }

        case ACTION_TYPE.DELETE_INGRIDIANT:
            return {
                ...state,
                ingredients: state.ingredients.filter(name => name !== action.payload.value)
            }

        case ACTION_TYPE.FILE_CHANGE: 
            return {
                ...state,
                [action.payload.name]:action.payload.image
            }

        default:
            return state;
    }
}