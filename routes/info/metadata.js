const mapAreasMetadata = {
    params: {},
    columns: [
        { name: "location_group_id", displayName: "Location Group ID", type: "integer", scale: "ordinal" },
        { name: "location_group_name", displayName: "Location Group Name", type: "name", scale: "categorical" },
        { name: "location_group_description", displayName: "Location Group Description", type: "text", scale: "ordinal" }
    ],
    defaultView: "table",
    default_column_x: "location_group_id",
    default_column_y: "location_group_name"
};

const visitorLogMetadata = {
    params: {},
    columns: [
        { name: "creature_sighting_time", displayName: "Sighting Time", type: "time", scale: "ordinal" },
        { name: "creature_name", displayName: "Creature Name", type: "name", scale: "categorical" }
    ],
    defaultView: "table",
    default_column_x: "creature_sighting_time",
    default_column_y: "creature_name"
};

const allMetadata = {
    '/mapAreas': mapAreasMetadata,
    '/visitorLog': visitorLogMetadata
};

module.exports = allMetadata;