const creatureLookupQuery = 'SELECT creature_name, creature_faction, creature_color FROM creatures';
const creatureHealthQuery = 'SELECT creature_name, creature_faction, creature_health from creatures';
const creatureMoodQuery = 'SELECT creature_name, creature_faction, creature_mood from creatures ORDER BY creature_mood DESC';
const happiestCreaturesQuery = 'SELECT creature_name, creature_faction, creature_mood from creatures ORDER BY creature_mood DESC LIMIT 10';
const triageListQuery = 'SELECT creature_name, creature_faction, creature_health FROM creatures ORDER BY creature_health ASC LIMIT 10';
const interactionsQuery = `
    SELECT interaction_event_time, location_groups.location_group_name, locations.location_x, locations.location_y, players.player_name
    FROM
        interaction_events
    JOIN
        creatures on interaction_events.creature_id = creatures.creature_id
    JOIN
        players on interaction_events.player_id = players.player_id
    JOIN
        locations on interaction_events.location_id = locations.location_id
    JOIN
        location_groups on locations.location_group_id = location_groups.location_group_id
    WHERE
        creature_name like :creatureName`;
const giftsQuery = `
    SELECT gifting_events.gifting_event_time, players.player_name, recipes.recipe_category
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
        creature_name like :creatureName`;

const allQueries = {
  '/list': 'SELECT * FROM creatures',
  '/creatureLookup': creatureLookupQuery,
  '/creatureHealth': creatureHealthQuery,
  '/creatureMood': creatureMoodQuery,
  '/happiestCreatures': happiestCreaturesQuery,
  '/triageList': triageListQuery,
  '/interactions': interactionsQuery, // params: creatureName
  '/gifts': giftsQuery // params: creatureName
};

module.exports = allQueries;