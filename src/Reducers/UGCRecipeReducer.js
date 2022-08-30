export const INITIAL_STATE = {
    name: '',
    method: '',
    category: '',
    status: '',
    added_by: '',
    img: '',
}

export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    LOAD_DATA: "LOAD_DATA",
}

export const UGCRecipeReducer = (state = INITIAL_STATE, action) => {
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