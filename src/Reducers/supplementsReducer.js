export const INITIAL_STATE = {
    make_featured: true,
    name: '',
    fact: '',
    research: '',
    safety_information: '',
    photo: ''
}

export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    LOAD_DATA: "LOAD_DATA",
}


export const supplementsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.CHANGE_INPUT: 
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

        default:
            return state;
    }
}