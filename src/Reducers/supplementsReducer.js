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
    CHANGE_SWITCH: "CHANGE_SWITCH",
    LOAD_DATA: "LOAD_DATA",
    FILE_CHANGE: "FILE_CHANGE"
}


export const supplementsReducer = (state = INITIAL_STATE, action) => {
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

        case ACTION_TYPE.FILE_CHANGE: 
            return {
                ...state,
                [action.payload.name]:action.payload.image
            }

        default:
            return state;
    }
}