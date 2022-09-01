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
    ADD_REMEDIES: "ADD_REMEDIES",
    DELETE_REMEDIES: "DELETE_REMEDIES",
    ADD_AILMENT: "ADD_AILMENT",
    DELETE_AILMENT: "DELETE_AILMENT",
    ADD_PROPERTY: "ADD_PROPERTY",
    DELETE_PROPERTY: "DELETE_PROPERTY",
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

        // Remedy
        case ACTION_TYPE.ADD_REMEDIES:
            let newRemedy = [];
            let remedyExist = state.remedies.indexOf(action.payload.value)
            if(remedyExist === -1){
                newRemedy = [...state.remedies, action.payload.value]
            }
            else {
                newRemedy = state.remedies
            }
            return {
                ...state, remedies: newRemedy
            }

        case ACTION_TYPE.DELETE_REMEDIES:
            return {
                ...state,
                remedies: state.remedies.filter(
                    name => name !== action.payload.value
                )
            }
            
        // Ailment
        case ACTION_TYPE.ADD_AILMENT: 
            let newAilmentsArray = [];
            let ailmentExist = state.ailmentAndSymptoms.indexOf(action.payload.value)
            if(ailmentExist === -1){
                newAilmentsArray = [...state.ailmentAndSymptoms, action.payload.value]
            }
            else {
                newAilmentsArray = state.ailmentAndSymptoms
            }
            return {
                ...state, ailmentAndSymptoms: newAilmentsArray
            }

        case ACTION_TYPE.DELETE_AILMENT:
            return {
                ...state,
                ailmentAndSymptoms: state.ailmentAndSymptoms.filter(
                    name => name !== action.payload.value
                )
            }

        // Property
    case ACTION_TYPE.ADD_PROPERTY: 
        let newPropertyArray = [];
        let propertisExist = state.associatedProperties.indexOf(action.payload.value)
        if(propertisExist === -1){
            newPropertyArray = [...state.associatedProperties, action.payload.value]
        }
        else {
            newPropertyArray = state.associatedProperties
        }
        return {
            ...state, associatedProperties: newPropertyArray
        }

    case ACTION_TYPE.DELETE_PROPERTY:
        return {
            ...state,
            associatedProperties: state.associatedProperties.filter(
                name => name !== action.payload.value
            )
        }
        default:
            return state;

    }
}