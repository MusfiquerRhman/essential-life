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
    LOAD_DATA: "LOAD_DATA",
}

export const blendReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.CHANGE_INPUT: 
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

        case ACTION_TYPE.ADD_INGRIDIANT: 
        let newingredientsArray = new Set([...state.ingredients, action.payload.value]);
        return {
            ...state,
            ingredients: [...newingredientsArray]
        }

        case ACTION_TYPE.DELETE_INGRIDIANT:
            return {
                ...state,
                ingredients: state.ingredients.filter(name => name !== action.payload.value)
            }

        default:
            return state;
    }
}