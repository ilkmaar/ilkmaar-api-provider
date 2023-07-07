const express = require('express');
const router = express.Router();
const connection = require('../db');

const infoQueries = require('./info/queries');
const playersQueries = require('./players/queries');
const creatureQueries = require('./creatures/queries');
const craftingQueries = require('./crafting/queries');
const foragingQueries = require('./foraging/queries');

const infoMeta = require('./info/metadata');
const playersMeta = require('./players/metadata');
const creatureMeta = require('./creatures/metadata');
const craftingMetas = require('./crafting/metadata');
const foragingMeta = require('./foraging/metadata');

const queriesMap = {
    'info': infoQueries,
    'players': playersQueries,
    'creatures': creatureQueries,
    'crafting': craftingQueries,
    'foraging': foragingQueries
};

const metadataMap = {
    'info': infoMeta,
    'players': playersMeta,
    'creatures': creatureMeta,
    'crafting': craftingMetas,
    'foraging': foragingMeta
};

router.get('/:base/:endpoint', (req, res) => {
    const { base, endpoint } = req.params;
    const sql = queriesMap[base][`/${endpoint}`]; // parameterized queries
    const query = connection.format(sql, req.query); // insert (escaped) query params into SQL

    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while querying the database' });
        }
        res.json(results);
    });
});

router.get('/:base/:endpoint/metadata', (req, res) => {
    const { base, endpoint } = req.params;
    const metadata = metadataMap[`${base}`][`/${endpoint}`]; // get metadata
    res.json(metadata);
});

// Export the router
module.exports = router;