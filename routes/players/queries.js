const listQuery = 'SELECT * FROM players';
const foragingQuery = ` 
    SELECT
        resource_transfers.resource_transfer_time,
        resource_transfers.resource_id,
        resource_types.resource_type as resource,
        source_collections.collection_name AS 'map area'
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
        players.player_name like :playerName
    AND
        destination_collections.collection_type = 'inventory'
    ORDER BY
        resource_transfers.resource_transfer_time DESC`;

const giftingQuery = `
    SELECT gifting_events.gifting_event_time, creatures.creature_name, recipes.recipe_name
    FROM
        gifting_events
    LEFT JOIN
        interaction_events on gifting_events.gifting_event_id = interaction_events.gifting_event_id
    JOIN
        creatures on interaction_events.creature_id = creatures.creature_id
    JOIN
        players on interaction_events.player_id = players.player_id
    JOIN
        item_transfers on gifting_events.item_transfer_id = item_transfers.item_transfer_id
    JOIN
        items on item_transfers.item_id = items.item_id
    JOIN
        recipes on items.recipe_id = recipes.recipe_id
    WHERE
        player_name like :playerName`;

const craftingQuery = `
      SELECT
          crafting_event_time,
          recipe_name
      FROM
          crafting_events
      JOIN
          recipes on crafting_events.recipe_id = recipes.recipe_id
      JOIN
          collections on crafting_events.crafting_table_collection_id = collections.collection_id
      JOIN
          player_collection_access on collections.collection_id = player_collection_access.collection_id
      JOIN
          players on player_collection_access.player_id = players.player_id
      WHERE
          players.player_name like :playerName
      ORDER BY crafting_event_time DESC
      LIMIT 10`;

const trashQuery = `
      SELECT
          resource_transfer_time,
          resource_types.resource_type,
          resource_transfers.resource_id
      FROM
          resource_transfers
      JOIN
          collections on resource_transfers.destination_collection_id = collections.collection_id
      JOIN
          player_collection_access on collections.collection_id = player_collection_access.collection_id
      JOIN
          players on player_collection_access.player_id = players.player_id
      JOIN
          resources on resource_transfers.resource_id = resources.resource_id
      JOIN
          resource_types on resources.resource_type_id = resource_types.resource_type_id
      WHERE
          players.player_name like :playerName
      AND
          collections.collection_type = 'crafting_table'
      ORDER BY resource_transfers.resource_transfer_time DESC
      LIMIT 30`;

const allPlayerGiftingLogQuery = `
    SELECT gifting_events.gifting_event_time, recipes.recipe_name, creatures.creature_name
    FROM gifting_events
    JOIN item_transfers on gifting_events.item_transfer_id = item_transfers.item_transfer_id
    JOIN items on item_transfers.item_id = items.item_id
    JOIN recipes on items.recipe_id = recipes.recipe_id
    JOIN creatures on gifting_events.creature_id = creatures.creature_id`;

const allQueries = {
    '/list': listQuery,
    '/foraging': foragingQuery, // params: playerName
    '/gifting': giftingQuery, // params: playerName
    '/crafting' : craftingQuery, // params: playerName
    '/trash' : trashQuery, // params: playerName
    '/allPlayerGiftingLog' : allPlayerGiftingLogQuery
}

module.exports = allQueries;