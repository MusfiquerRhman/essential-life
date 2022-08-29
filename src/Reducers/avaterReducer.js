export const INITIAL_STATE = {
    photo: ''
}

export const ACTION_TYPE = {
    LOAD_DATA: "LOAD_DATA",
    FILE_CHANGE: "FILE_CHANGE"
}

export const avaterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.FILE_CHANGE: 
            return {
                ...state,
                [action.payload.name]:action.payload.image
            }

        default:
            return state;
    }
}