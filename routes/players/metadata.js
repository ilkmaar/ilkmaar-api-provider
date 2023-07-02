const playersMetadata = {
    columns: [
        { name: "player_id", displayName: "Player ID", type: "integer", scale: "ordinal" },
        { name: "player_name", displayName: "Player Name", type: "name", scale: "categorical" },
        { name: "player_avatar", displayName: "Player Avatar", type: "image", scale: "ordinal" }
    ],
    defaultView: "table",
    default_column_x: "player_id",
    default_column_y: "player_name"
};

const foragingMetadata = {
    columns: [
        { name: "resource_transfer_time", displayName: "Transfer Time", type: "time", scale: "ordinal" },
        { name: "resource_id", displayName: "Resource ID", type: "integer", scale: "ordinal" },
        { name: "resource", displayName: "Resource", type: "name", scale: "categorical" },
        { name: "map area", displayName: "Map Area", type: "name", scale: "categorical" }
    ],
    defaultView: "table",
    default_column_x: "resource_transfer_time",
    default_column_y: "resource"
};

const giftingMetadata = {
    columns: [
        { name: "gifting_event_time", displayName: "Event Time", type: "time", scale: "ordinal" },
        { name: "creature_name", displayName: "Creature Name", type: "name", scale: "categorical" },
        { name: "recipe_name", displayName: "Recipe Name", type: "name", scale: "categorical" }
    ],
    defaultView: "table",
    default_column_x: "gifting_event_time",
    default_column_y: "creature_name"
};

const craftingMetadata = {
    columns: [
        { name: "crafting_event_time", displayName: "Crafting Time", type: "time", scale: "ordinal" },
        { name: "recipe_name", displayName: "Recipe Name", type: "name", scale: "categorical" }
    ],
    defaultView: "table",
    default_column_x: "crafting_event_time",
    default_column_y: "recipe_name"
};

const trashMetadata = {
    columns: [
        { name: "resource_transfer_time", displayName: "Transfer Time", type: "time", scale: "ordinal" },
        { name: "resource_type", displayName: "Resource Type", type: "name", scale: "categorical" },
        { name: "resource_id", displayName: "Resource ID", type: "integer", scale: "ordinal" }
    ],
    defaultView: "table",
    default_column_x: "resource_transfer_time",
    default_column_y: "resource_type"
};

const allPlayerGiftingLogMetadata = {
    columns: [
        { name: "gifting_event_time", displayName: "Gifting Time", type: "time", scale: "ordinal" },
        { name: "recipe_name", displayName: "Recipe Name", type: "name", scale: "categorical" },
        { name: "creature_name", displayName: "Creature Name", type: "name", scale: "categorical" }
    ],
    defaultView: "table",
    default_column_x: "gifting_event_time",
    default_column_y: "recipe_name"
};

const allMetadata = {
    '/players': playersMetadata,
    '/foraging': foragingMetadata,
    '/gifting': giftingMetadata,
    '/crafting': craftingMetadata,
    '/trash': trashMetadata,
    '/allPlayerGiftingLog': allPlayerGiftingLogMetadata
};

module.exports = allMetadata;