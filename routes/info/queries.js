const mapAreasQuery = 'SELECT * from location_groups';

const visitorLogQuery = `
    SELECT
        creature_sightings.creature_sighting_time,
        creatures.creature_name
    FROM
        creature_sightings
    JOIN
        creatures ON creature_sightings.creature_id = creatures.creature_id
    JOIN
        location_groups ON creature_sightings.location_group_id = location_groups.location_group_id
    WHERE
        location_group_name like ?
    ORDER BY time DESC
    LIMIT 10`;

module.exports = {
    'mapAreasQuery': mapAreasQuery,
    'visitorLogQuery': visitorLogQuery // params: locationGroup
};