export const INITIAL_STATE = {
    isActive: true,
    title: '',
    subtitle: '',
    description: '',
    legacyURL: '',
    url: '',
    buttonText: '',
    textStyle: '',
    overlayStyle: '',
    contentVerticaleAlingment: '',
    contentHorizontalAlingment: '',
    showForIOS: true,
    showForAndroid: true,
    regionsVisible: [],
    backgroundColor: ''
}

export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    CHANGE_SWITCH: "CHANGE_SWITCH"
}

export const cardReducer = (state, action) => {
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
        default:
            return state;

    }
}