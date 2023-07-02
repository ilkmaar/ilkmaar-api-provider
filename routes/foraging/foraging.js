const express = require('express');
const router = express.Router();
const connection = require('../../db');
const metadata = require('./metadata.js');
const queries = require('./queries');

// Resource finding
router.get('/resourceFinder', (req, res) => {
    let resourceType = req.query.resourceType;
    connection.query(queries['/resourceFinder'], [resourceType], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while querying the database' });
        }
        res.json(results);
    });
});



router.get('/resourceFinder', (req, res) => {
    let resourceType = req.query.resourceType;
    let q = `
        SELECT
            resource_types.resource_type as resource,
            source_collections.collection_name AS source,
            COUNT(*) as count
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

    connection.query(q, [resourceType], function(err, results, fields) {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while querying the database' });
        }
        res.json(results);
    });
});

//
//
// METADATA ROUTES
//
//

router.get('/resourceFinder/metadata', (req, res) => {
    res.json(metadata['/resourceFinder']);
});


// Export the router
module.exports = router;