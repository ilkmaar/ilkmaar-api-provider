const cookBookMetadata = {
    params: {},
    columns: [
        { name: "recipe_name", displayName: "Recipe Name", type: "name", scale: "categorical" },
        { name: "resource_type", displayName: "Resource Type", type: "name", scale: "categorical" },
        { name: "resource_type_faction", displayName: "Resource Faction", type: "name", scale: "categorical" }
    ],
    defaultView: "table",
    default_column_x: "recipe_name",
    default_column_y: "resource_type"
};

const goodCookBookMetadata = {
    params: {},
    columns: [
        { name: "recipe_name", displayName: "Recipe Name", type: "name", scale: "categorical" },
        { name: "resource_type", displayName: "Resource Type", type: "name", scale: "categorical" },
        { name: "resource_type_faction", displayName: "Resource Faction", type: "name", scale: "categorical" },
        { name: "resource_type_rarity", displayName: "Resource Rarity", type: "number", scale: "numeric" }
    ],
    defaultView: "table",
    default_column_x: "resource_type_faction",
    default_column_y: "resource_type_rarity"
};

const cauldronManualMetadata = {
    params: {},
    columns: [
        { name: "recipe_name", displayName: "Recipe Name", type: "name", scale: "categorical" },
        { name: "recipe_temp", displayName: "Recipe Temperature", type: "number", scale: "numeric" },
        { name: "recipe_difficulty", displayName: "Recipe Difficulty", type: "number", scale: "numeric" }
    ],
    defaultView: "table",
    default_column_x: "recipe_name",
    default_column_y: "recipe_difficulty"
};

const craftingMetadata = {
    '/cookBook': cookBookMetadata,
    '/goodCookBook': goodCookBookMetadata,
    '/cauldronManual': cauldronManualMetadata
};

module.exports = craftingMetadata;