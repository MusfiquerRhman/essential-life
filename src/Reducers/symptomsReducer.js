export const INITIAL_STATE = {
    name: '',
    type: '',
    description: '',
    bodySystem: [],
    relatedBodySystem: [],
    ailments: []
}

export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    ADD_BODY_SYSTEM: "ADD_BODY_SYSTEM",
    DELETE_BODY_SYSTEM: "DELETE_BODY_SYSTEM",
    ADD_RELETED_BODY_SYSTEM: "ADD_RELETED_BODY_SYSTEM",
    DELETE_RELETED_BODY_SYSTEM: "DELETE_RELETED_BODY_SYSTEM",
    ADD_AILMENT: "ADD_AILMENT",
    DELETE_AILMENT: "DELETE_AILMENT",
    LOAD_DATA: "LOAD_DATA",
}

export const symptomsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.CHANGE_INPUT: 
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

        // BODY SYSTEM
        case ACTION_TYPE.ADD_BODY_SYSTEM: 
            let newtBodySystemArray = [];
            let bodySystemExist = state.bodySystem.indexOf(action.payload.value)
            if(bodySystemExist === -1){
                newtBodySystemArray = [...state.bodySystem, action.payload.value]
            }
            else {
                newtBodySystemArray = state.bodySystem
            }
            return {
                ...state,
                bodySystem: newtBodySystemArray
            }

        case ACTION_TYPE.DELETE_BODY_SYSTEM:
            return {
                ...state,
                bodySystem: state.bodySystem.filter(name => name !== action.payload.value)
            }


        // RELETED BODY SYSTEM
        case ACTION_TYPE.ADD_RELETED_BODY_SYSTEM: 
            let newReletedBodySystemArray = [];
            let reletedBodySystemExist = state.relatedBodySystem.indexOf(action.payload.value)
            if(reletedBodySystemExist === -1){
                newReletedBodySystemArray = [...state.relatedBodySystem, action.payload.value]
            }
            else {
                newReletedBodySystemArray = state.relatedBodySystem
            }
            return {
                ...state,
                relatedBodySystem: newReletedBodySystemArray
            }

        case ACTION_TYPE.DELETE_RELETED_BODY_SYSTEM:
            return {
                ...state,
                relatedBodySystem: state.relatedBodySystem.filter(name => name !== action.payload.value)
            }

        // AILMENT
        case ACTION_TYPE.ADD_AILMENT: 
            let newAilmentArray = [];
            let ailmentExist = state.ailments.indexOf(action.payload.value)
            if(ailmentExist === -1){
                newAilmentArray = [...state.ailments, action.payload.value]
            }
            else {
                newAilmentArray = state.ailments
            }
            return {
                ...state,
                ailments: newAilmentArray
            }

        case ACTION_TYPE.DELETE_SOURCHING_METHOD:
            return {
                ...state,
                ailments: state.ailments.filter(name => name !== action.payload.value)
            }

    case ACTION_TYPE.DELETE_AILMENT:
        return {
            ...state,
            blends_with: state.blends_with.filter(name => name !== action.payload.value)
        }

        default:
            return state;
    }
}