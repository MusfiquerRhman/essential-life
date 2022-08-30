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
    ADD_TOP_PROPERTIES: "ADD_TOP_PROPERTIES",
    DELETE_TOP_PROPERTIES: "DELETE_TOP_PROPERTIES",
    ADD_MAIN_CONSTITUENTS: "ADD_MAIN_CONSTITUENTS",
    DELETE_MAIN_CONSTITUENTS: "DELETE_MAIN_CONSTITUENTS",
    ADD_SOURCHING_METHOD: "ADD_SOURCHING_METHOD",
    DELETE_SOURCHING_METHOD: "DELETE_SOURCHING_METHOD",
    ADD_BLENDS_WITH: "ADD_BLENDS_WITH",
    DELETE_BLENDS_WITH: "DELETE_BLENDS_WITH",
    LOAD_DATA: "LOAD_DATA",
}

export const oilReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.CHANGE_INPUT: 
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

        // TOP PROPERTIES
        case ACTION_TYPE.ADD_TOP_PROPERTIES: 
            let newtopPropertiesArray = [];
            let propertisExist = state.top_properties.indexOf(action.payload.value)
            if(propertisExist === -1){
                newtopPropertiesArray = [...state.top_properties, action.payload.value]
            }
            else {
                newtopPropertiesArray = state.top_properties
            }
            return {
                ...state,
                top_properties: newtopPropertiesArray
            }

        case ACTION_TYPE.DELETE_TOP_PROPERTIES:
            return {
                ...state,
                top_properties: state.top_properties.filter(name => name !== action.payload.value)
            }


        // ADD_MAIN_CONSTITUENTS
        case ACTION_TYPE.ADD_MAIN_CONSTITUENTS: 
            let newmainConstituentsArray = [];
            let mainConstituentsExist = state.main_constituents.indexOf(action.payload.value)
            if(mainConstituentsExist === -1){
                newmainConstituentsArray = [...state.main_constituents, action.payload.value]
            }
            else {
                newmainConstituentsArray = state.main_constituents
            }
            return {
                ...state,
                main_constituents: newmainConstituentsArray
            }

        case ACTION_TYPE.DELETE_MAIN_CONSTITUENTS:
            return {
                ...state,
                main_constituents: state.main_constituents.filter(name => name !== action.payload.value)
            }

        // ADD_SOURCHING_METHOD
        case ACTION_TYPE.ADD_SOURCHING_METHOD: 
            let newsourchingMethodsArray = [];
            let sourchingMethodsExist = state.sourching_methods.indexOf(action.payload.value)
            if(sourchingMethodsExist === -1){
                newsourchingMethodsArray = [...state.sourching_methods, action.payload.value]
            }
            else {
                newsourchingMethodsArray = state.sourching_methods
            }
            return {
                ...state,
                sourching_methods: newsourchingMethodsArray
            }

        case ACTION_TYPE.DELETE_SOURCHING_METHOD:
            return {
                ...state,
                sourching_methods: state.sourching_methods.filter(name => name !== action.payload.value)
            }


    // ADD_BLENDS_WITH
    case ACTION_TYPE.ADD_BLENDS_WITH: 
        let newblendsWithArray = [];
        let blendsWithExist = state.blends_with.indexOf(action.payload.value)
        if(blendsWithExist === -1){
            newblendsWithArray = [...state.blends_with, action.payload.value]
        }
        else {
            newblendsWithArray = state.blends_with
        }
        return {
            ...state,
            blends_with: newblendsWithArray
        }

    case ACTION_TYPE.DELETE_BLENDS_WITH:
        return {
            ...state,
            blends_with: state.blends_with.filter(name => name !== action.payload.value)
        }

        default:
            return state;
    }
}