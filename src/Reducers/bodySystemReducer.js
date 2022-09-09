export const INITIAL_STATE = {
    name: '',
    tip: '',
    description: '',
    remedies: [],
    ailmentAndSymptoms: [],
    associatedProperties: [],
    photo: "",
}

export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    LOAD_DATA: "LOAD_DATA",
    ADD_CHIPS: "ADD_CHIPS",
    DELETE_CHIPS: "DELETE_CHIPS"
}

export const bodySystemReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.CHANGE_INPUT:
            return {
                ...state, [action.payload.name]:action.payload.value
            }

        case ACTION_TYPE.LOAD_DATA:
            return {
                state: action.payload
            }

        // Chips
        case ACTION_TYPE.ADD_CHIPS:
            let newChips = new Set([...state[action.payload.name], action.payload.value]);
            return {
                ...state, [action.payload.name]: [...newChips]
            }

        case ACTION_TYPE.DELETE_CHIPS:
            return {
                ...state,
                [action.payload.name]: state[action.payload.name].filter(
                    name => name !== action.payload.value
                )
            }
            
        default:
            return state;

    }
}