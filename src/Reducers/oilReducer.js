export const INITIAL_STATE = {
    make_featured: true,
    name: '',
    latine_name: '',
    fact: '',
    emotion_1: '',
    emotion_2: '',
    emotion_3: '',
    safety_information: '',
    top_properties: [],
    main_constituents: [],
    emotion_from: '',
    emotion_to: '',
    sourching_methods: [],
    blends_with: [],
    photo: ''
}


export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    ADD_CHIPS: "ADD_CHIPS",
    DELETE_CHIPS: "DELETE_CHIPS",
    LOAD_DATA: "LOAD_DATA",
}

export const oilReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.CHANGE_INPUT: 
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

        // CHIPS

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