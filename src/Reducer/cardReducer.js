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
    backgroundColor: '',
    backgroundImg: '',
    headerImg: '',
}

export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    CHANGE_SWITCH: "CHANGE_SWITCH",
    TOGGLE_REGION: "TOGGLE_REGION",
    FILE_CHANGE: "FILE_CHANGE",
    LOAD_DATA: "LOAD_DATA"
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

        case ACTION_TYPE.TOGGLE_REGION:
            const regionState = state.regionsVisible.indexOf(action.payload.region);
            let newRegion = [];
            if(regionState === -1){
                newRegion = [...state.regionsVisible, action.payload.region]
            }
            else {
                newRegion = [...state.regionsVisible.filter(
                    currRegion => currRegion !== action.payload.region
                )]
            }
            return {
                ...state, regionsVisible: newRegion
            }

        case ACTION_TYPE.FILE_CHANGE: 
            return {
                ...state,
                [action.payload.name]:action.payload.image
            }

        case ACTION_TYPE.LOAD_DATA:
            return {
                state: action.payload
            }

        default:
            return state;

    }
}