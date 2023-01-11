import { CATEGORIES_ACTION_TYPES } from './category.types';


export const setCategoriesMap = (categoriesMap) => ({
    type: CATEGORIES_ACTION_TYPES.SET_CATEGOREIS_MAP, payload: categoriesMap
})