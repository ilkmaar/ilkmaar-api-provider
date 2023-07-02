const resourceFinderQuery = `
    SELECT
        resource_types.resource_type AS resource,
        source_collections.collection_name AS source,
        COUNT(*) AS count
    FROM
        resource_transfers
    JOIN
        resources ON resource_transfers.resource_id = resources.resource_id
    JOIN
        resource_types ON resources.resource_type_id = resource_types.resource_type_id
    JOIN
        collections AS source_collections ON resource_transfers.source_collection_id = source_collections.collection_id
    JOIN
        collections AS destination_collections ON resource_transfers.destination_collection_id = destination_collections.collection_id
    JOIN
        player_collection_access ON destination_collections.collection_id = player_collection_access.collection_id
    JOIN
        players ON player_collection_access.player_id = players.player_id
    WHERE
        destination_collections.collection_type = 'inventory'
    AND
        resource_types.resource_type = ?
    GROUP BY resource_types.resource_type, source_collections.collection_name
    ORDER BY count DESC`;

module.exports = {
    '/resourceFinder' : resourceFinderQuery
};