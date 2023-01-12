// === v1 ===
//export const selectCategoriesMap = (state)=>state.categories.categoriesMap;
// === v1 ===

//=== v2 ===
export const selectCategoriesMap = (state)=>{
    return state.categories.categoriesMap.reduce((acc,category)=>{
        const {title,items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
    },{});
};
//=== v2 ===

//=== use reselector lib ===
// import {createSelector} from 'reselect';

// const selectCategoryReducer = (state)=>state.categories;

// export const selectCategories = createSelector(
//     [selectCategoryReducer],
//     categoriesSlice =>categoriesSlice.categories
// );

// export const selectCategoriesMap = createSelector(
//     [selectCategories],
//     (categories)=>{
//         return categories.reduce((acc,category)=>{
//             const {title,items} = category;
//             acc[title.toLowerCase()] = items;
//             return acc;
//         },{});
//     }
// )

//=== use reselector lib ===