const resourceFinderMetadata = {
    params: {
        "resourceType" : {"required": true}
    },
    columns: [
        { name: "resource", displayName: "Resource", type: "name", scale: "categorical" },
        { name: "source", displayName: "Source", type: "name", scale: "categorical" },
        { name: "count", displayName: "Count", type: "number", scale: "linear" }
    ],
    defaultView: "table",
    default_column_x: "resource",
    default_column_y: "count"
};

const allMetadata = {
    '/resourceFinder': resourceFinderMetadata
};

module.exports = allMetadata;