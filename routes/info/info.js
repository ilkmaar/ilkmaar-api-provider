const express = require('express');
const router = express.Router();
const connection = require('../../db');
const metadata = require('./metadata.js');
const queries = require('./queries.js');

router.get('/mapAreas', (req, res) => {
    connection.query(mapAreasQuery, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while querying the database' });
        }
        res.json(results);
    });
});

router.get('/visitorLog', (req, res) => {
    let locationGroup = req.query.locationGroup;
    connection.query(visitorLogQuery, [locationGroup], (err, results) => {
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

router.get('/mapAreas/metadata', (req, res) => {
    res.json(metadata['/mapAreas']);
});

router.get('/visitorLog/metadata', (req, res) => {
    res.json(metadata['/visitorLog']);
});


// Export the router
module.exports = router;