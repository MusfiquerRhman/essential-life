export const INITIAL_STATE = {
    name: '',
    bio: '',
    email: '',
    password: '',
    overrideSubscriptionExpire: false,
    customExpireDate: new Date(),
    avaterId: '',
    note: '',
    photo: '',
    isAdmin: false,
}

export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    LOAD_DATA: "LOAD_DATA",
}


export const userReducer = (state = INITIAL_STATE, action) => {
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