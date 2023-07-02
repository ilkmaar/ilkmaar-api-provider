const cookBookQuery = `
    SELECT 
        recipes.recipe_name, 
        resource_types.resource_type, 
        resource_types.resource_type_faction
    FROM 
        recipe_ingredient_resource_types
    JOIN 
        recipes ON recipe_ingredient_resource_types.recipe_id = recipes.recipe_id
    JOIN 
        resource_types ON recipe_ingredient_resource_types.resource_type_id = resource_types.resource_type_id`;

const goodCookBookQuery = `
    SELECT 
        recipes.recipe_name, 
        resource_types.resource_type, 
        resource_types.resource_type_faction, 
        resource_types.resource_type_rarity
    FROM 
        recipe_ingredient_resource_types
    JOIN 
        recipes ON recipe_ingredient_resource_types.recipe_id = recipes.recipe_id
    JOIN 
        resource_types ON recipe_ingredient_resource_types.resource_type_id = resource_types.resource_type_id`;

const cauldronManualQuery = `
    SELECT 
        DISTINCT recipes.recipe_name, 
        recipes.recipe_temp, 
        recipes.recipe_difficulty
    FROM 
        recipes
    JOIN 
        recipe_ingredient_resource_types ON recipes.recipe_id = recipe_ingredient_resource_types.recipe_id`;

module.exports = {
    '/cookBook': cookBookQuery,
    '/goodCookBook': goodCookBookQuery,
    '/cauldronManual': cauldronManualQuery
};