export const INITIAL_STATE = {
    name: '',
    method: '',
    remedies: [],
    user: '',
    photo: ''
}

export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    ADD_REMEDY: "ADD_REMEDY",
    DELETE_REMEDY: "DELETE_REMEDY",
    LOAD_DATA: "LOAD_DATA",
}

export const remedyReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.CHANGE_INPUT: 
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

        // TOP PROPERTIES
        case ACTION_TYPE.ADD_REMEDY: 
            let newtopRemediesArray = new Set([...state.remedies, action.payload.value]);
            return {
                ...state,
                remedies: [...newtopRemediesArray]
            }

        case ACTION_TYPE.DELETE_REMEDY:
            return {
                ...state,
                remedies: state.remedies.filter(name => name !== action.payload.value)
            }

        default:
            return state;
    }
}