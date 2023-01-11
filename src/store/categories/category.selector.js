// === v1 ===
//export const selectCategoriesMap = (state)=>state.categories.categoriesMap;
// === v1 ===

export const selectCategoriesMap = (state)=>{
    return state.categories.categoriesMap.reduce((acc,category)=>{
        const {title,items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
    },{});
};


    
