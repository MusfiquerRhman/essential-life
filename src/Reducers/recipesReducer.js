export const INITIAL_STATE = {
    make_featured: true,
    recipe_name: '',
    method: '',
    categories: [],
    related_recipes: [],
    photo: '',
    user: ''
}

export const ACTION_TYPE = {
    CHANGE_INPUT: "CHANGE_INPUT",
    ADD_CATEGORY: "ADD_CATEGORY",
    DELETE_CATEGORY: "DELETE_CATEGORY",
    ADD_RELETED_RECIPES: "ADD_RELETED_RECIPES",
    DELETE_RELETED_RECIPES: "DELETE_RELETED_RECIPES",
    LOAD_DATA: "LOAD_DATA",
}

export const recipeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.CHANGE_INPUT: 
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

        case ACTION_TYPE.ADD_CATEGORY: 
            let newcategoryArray = [];
            let categoriesExist = state.categories.indexOf(action.payload.value)
            if(categoriesExist === -1){
                newcategoryArray = [...state.categories, action.payload.value]
            }
            else {
                newcategoryArray = state.categories
            }
            return {
                ...state,
                categories: newcategoryArray
            }

        case ACTION_TYPE.DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(name => name !== action.payload.value)
            }

        case ACTION_TYPE.ADD_RELETED_RECIPES: 
            let newRecipes = [];
            let recipeExist = state.related_recipes.indexOf(action.payload.value)
            if(recipeExist === -1){
                newRecipes = [...state.related_recipes, action.payload.value]
            }
            else {
                newRecipes = state.related_recipes
            }
            return {
                ...state,
                related_recipes: newRecipes
            }

        case ACTION_TYPE.DELETE_RELETED_RECIPES:
            return {
                ...state,
                related_recipes: state.related_recipes.filter(name => name !== action.payload.value)
            }
            
        default:
            return state;
    }
}