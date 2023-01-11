import {CATEGORIES_ACTION_TYPES} from './category.types';

export const CATEGORIES_INITIAL_STATE={
    //=== v1 ===
    // categoriesMap:{}
    //=== v1 ===
    categoriesMap:[]
}

export const categoriesReducer = (state=CATEGORIES_INITIAL_STATE,action={})=>{
    const {type,payload} = action;
    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGOREIS_MAP:
            return{
                ...state,
                categoriesMap:payload
            }
         default:
             return state;
    }
}