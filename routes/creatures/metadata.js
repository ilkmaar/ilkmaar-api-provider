//
//
// METADATA ROUTES
//
//

const creatureLookupMetadata = {
    params: {},
    columns: [
        { name: "creature_name", displayName: "Creature Name", type: "name", scale: "categorical" },
        { name: "creature_faction", displayName: "Creature Faction", type: "name", scale: "categorical" },
        { name: "creature_color", displayName: "Creature Color", type: "name", scale: "categorical" }
    ],
    defaultView: "table",
    default_column_x: "creature_name",
    default_column_y: "creature_faction"
};

const creatureInteractionsMetadata = {
    params: {
        "creatureName" : {"required": true}
    },
    columns: [
        { name: "interaction_event_time", displayName: "Interaction Time", type: "time", scale: "ordinal" },
        { name: "location_group_name", displayName: "Location Group", type: "name", scale: "categorical" },
        { name: "location_x", displayName: "Location X", type: "number", scale: "linear" },
        { name: "location_y", displayName: "Location Y", type: "number", scale: "linear" },
        { name: "player_name", displayName: "Player", type: "name", scale: "categorical" }
    ],
    defaultView: "table",
    default_column_x: "location_x",
    default_column_y: "location_y"
};

const creatureGiftsMetadata = {
    params: {
        "creatureName" : {"required": true}
    },
    columns: [
        { name: "gifting_event_time", displayName: "Gifting Time", type: "time", scale: "ordinal" },
        { name: "player_name", displayName: "Player", type: "name", scale: "categorical" },
        { name: "recipe_category", displayName: "Recipe Category", type: "name", scale: "categorical" }
    ],
    defaultView: "table",
    default_column_x: "gifting_event_time",
    default_column_y: "recipe_category"
};

const creatureHealthMetadata = {
    params: {},
    columns: [
        { name: "creature_name", displayName: "Creature Name", type: "name", scale: "categorical" },
        { name: "creature_faction", displayName: "Creature Faction", type: "name", scale: "categorical" },
        { name: "creature_health", displayName: "Creature Health", type: "number", scale: "linear" }
    ],
    defaultView: "table",
    default_column_x: "creature_name",
    default_column_y: "creature_health"
};

const creatureMoodMetadata = {
    params: {},
    columns: [
        { name: "creature_name", displayName: "Creature Name", type: "name", scale: "categorical" },
        { name: "creature_faction", displayName: "Creature Faction", type: "name", scale: "categorical" },
        { name: "creature_mood", displayName: "Creature Mood", type: "number", scale: "linear" }
    ],
    defaultView: "table",
    default_column_x: "creature_name",
    default_column_y: "creature_mood"
};

const happiestCreaturesMetadata = {
    params: {},
    columns: [
        { name: "creature_name", displayName: "Creature Name", type: "name", scale: "categorical" },
        { name: "creature_faction", displayName: "Creature Faction", type: "name", scale: "categorical" },
        { name: "creature_mood", displayName: "Creature Mood", type: "number", scale: "linear" }
    ],
    defaultView: "table",
    default_column_x: "creature_name",
    default_column_y: "creature_mood"
};

const triageListMetadata = {
    params: {},
    columns: [
        { name: "creature_name", displayName: "Creature Name", type: "name", scale: "categorical" },
        { name: "creature_faction", displayName: "Creature Faction", type: "name", scale: "categorical" },
        { name: "creature_health", displayName: "Creature Health", type: "number", scale: "linear" }
    ],
    defaultView: "table",
    default_column_x: "creature_name",
    default_column_y: "creature_health"
};

const allMetadata = {
    '/creatureLookup': creatureLookupMetadata,
    '/interactions': creatureInteractionsMetadata,
    '/gifts': creatureGiftsMetadata,
    '/creatureHealth': creatureHealthMetadata,
    '/creatureMood': creatureMoodMetadata,
    '/happiestCreatures': happiestCreaturesMetadata,
    '/triageList': triageListMetadata
};

module.exports = allMetadata;